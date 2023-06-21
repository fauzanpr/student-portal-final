// TODO: answer here
import { useParams, useNavigate } from "react-router-dom";
import NavBar from "../components/Navbar";
import { useEffect, useState } from "react";

const EditStudent = () => {
  // TODO: answer here
  const { id } = useParams();
  let navigate = useNavigate();

  const [student, setStudent] = useState("");
  const [loading, setLoading] = useState(true);

  const [fullname, setFullname] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [programStudy, setProgramStudy] = useState("Ekonomi");

  const URL = `http://localhost:3001/student/${id}`;

  const fetchStudentDetail = async () => {
    try {
      await fetch(URL)
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          setStudent(res);
          setFullname(res.fullname);
          setAddress(res.address);
          setPhoneNumber(res.phoneNumber);
          setBirthDate(res.birthDate);
          setGender(res.gender);
          setProgramStudy(res.programStudy);
        })
        .then(() => {
          console.log(`the fullname is ${fullname}`);
          setLoading(false);
        });
    } catch (error) {
      console.log("error while fetching data on edit");
      console.log(error);
    }
  };

  const cekFaculty = (programStudy) => {
    if (!programStudy) return "Fakultas Ekonomi";
    if (
      programStudy === "Ekonomi" ||
      programStudy === "Manajemen" ||
      programStudy === "Akuntansi"
    )
      return "Fakultas Ekonomi";
    else if (
      programStudy === "Administrasi Publik" ||
      programStudy === "Administrasi Bisnis" ||
      programStudy === "Hubungan Internasional"
    )
      return "Fakultas Ilmu Sosial dan Politik";
    else if (programStudy === "Teknik Sipil" || programStudy === "Arsitektur")
      return "Fakultas Teknik";
    else if (
      programStudy === "Matematika" ||
      programStudy === "Fisika" ||
      programStudy === "Informatika"
    )
      return "Fakultas Teknologi Informasi dan Sains";
  };

  const submitEditHandler = async (event) => {
    event.preventDefault();
    const data = {
      fullname,
      address,
      phoneNumber,
      birthDate,
      gender,
      programStudy,
      faculty: cekFaculty(programStudy),
    };

    try {
      await fetch(URL, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      navigate("/student");
    } catch (e) {
      console.log("error on edit submit");
      console.log(e);
    }
  };

  useEffect(() => {
    console.log(`render ulang pada id ${id}`);
    fetchStudentDetail();
  }, []);
  return (
    <>
      {/* TODO: answer here */}
      <NavBar />
      <p>Halaman edit student</p>
      {loading && <p>Loading ...</p>}
      {!loading && student && (
        <div>
          <img src={student.profilePicture} alt="" />
          <form onSubmit={(e) => submitEditHandler(e)}>
            <div>
              <label htmlFor="fullname">Fullname</label>
              <input
                type="text"
                data-testid="name"
                onChange={(e) => setFullname(e.target.value)}
                value={fullname}
              />
            </div>
            <div>
              <label htmlFor="address">Address</label>
              <input
                type="text"
                value={address}
                data-testid="address"
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="text"
                value={phoneNumber}
                data-testid="phoneNumber"
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="birthDate">Birth Date</label>
              <input
                type="date"
                value={birthDate}
                data-testid="date"
                onChange={(e) => setBirthDate(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="gender">Gender</label>
              <select
                name=""
                id=""
                value={gender}
                data-testid="gender"
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div>
              <label htmlFor="prody">Program Study</label>
              <select
                name="programStudy"
                id="input-prody"
                data-testid="prody"
                value={programStudy}
                onChange={(e) => setProgramStudy(e.target.value)}
              >
                <option value="Ekonomi">Ekonomi</option>
                <option value="Manajemen">Manajemen</option>
                <option value="Akuntansi">Akuntansi</option>
                <option value="Administrasi Publik">Administrasi Publik</option>
                <option value="Administrasi Bisnis">Administrasi Bisnis</option>
                <option value="Hubungan Internasional">
                  Hubungan Internasional
                </option>
                <option value="Teknik Sipil">Teknik Sipil</option>
                <option value="Arsitektur">Arsitektur</option>
                <option value="Matematika">Matematika</option>
                <option value="Fisika">Fisika</option>
                <option value="Informatika">Informatika</option>
              </select>
            </div>
            <input type="submit" value="Edit student" data-testid="edit-btn" />
          </form>
        </div>
      )}
    </>
  );
};

export default EditStudent;
