// TODO: answer here
import { useState } from "react";
import NavBar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const AddStudent = () => {
  // TODO: answer here
  const [fullname, setFullname] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [address, setAddress] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("Male");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [programStudy, setProgramStudy] = useState("Ekonomi");

  let navigate = useNavigate();

  const cekFaculty = (programStudy) => {
    if (!programStudy) return false;
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

  const submitHandler = async (event) => {
    event.preventDefault();
    const data = {
      fullname,
      profilePicture,
      address,
      birthDate,
      gender,
      faculty: cekFaculty(programStudy),
      phoneNumber,
      programStudy,
    };

    try {
      await fetch("http://localhost:3001/student", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } catch (e) {
      console.log("error on post");
      console.log(e);
    }

    navigate("/student");
  };

  return (
    <>
      {/* TODO: answer here */}
      <NavBar />
      <p>Halaman add student</p>
      <form onSubmit={(e) => submitHandler(e)}>
        <div>
          <label htmlFor="fullname">Fullname</label>
          <input
            type="text"
            data-testid="name"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="profilePicture">Profile Picture</label>
          <input
            type="text"
            data-testid="profilePicture"
            value={profilePicture}
            onChange={(e) => setProfilePicture(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            data-testid="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="text"
            data-testid="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="date">Birth Date</label>
          <input
            type="date"
            data-testid="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="gender">Gender</label>
          <select
            name="gender"
            data-testid="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div>
          <label htmlFor="programStudy">Program Study</label>
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
        <input
          type="submit"
          value="Add student"
          id="add-btn"
          className="submit"
          data-testid="add-btn"
        />
      </form>
    </>
  );
};

export default AddStudent;
