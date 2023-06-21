// TODO: answer here

import { useEffect, useState } from "react";
import NavBar from "../components/Navbar";
import { Link } from "react-router-dom";

const Student = () => {
  // TODO: answer here
  const url = "http://localhost:3001/student";
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [studentFilter, setStudentFilter] = useState("All");

  const fetchStudent = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setStudents(data);
      if (loading) setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteBtn = async (id) => {
    try {
      await fetch(url + `/${id}`, {
        method: "DELETE",
      });
      await fetchStudent();
    } catch (error) {
      console.log("error from delete");
      console.log(error);
    }
  };

  const filterHandler = (faculty) => {
    setStudentFilter(faculty);
  };

  useEffect(() => {
    fetchStudent();
  }, []);

  const Filter = () => {
    return (
      <select
        id="filter"
        name="filter-faculty"
        data-testid="filter"
        value={studentFilter}
        onChange={(e) => filterHandler(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Fakultas Ekonomi">Fakultas Ekonomi</option>
        <option value="Fakultas Ilmu Sosial dan Politik">
          Fakultas Ilmu Sosial dan Politik
        </option>
        <option value="Fakultas Teknik">Fakultas Teknik</option>
        <option value="Fakultas Teknologi Informasi dan Sains">
          Fakultas Teknologi Informasi dan Sains
        </option>
      </select>
    );
  };

  const StudentTable = () => {
    return (
      <table id="table-student">
        <thead>
          <tr>
            <th>No</th>
            <th>Full Name</th>
            <th>Faculty</th>
            <th>Program Study</th>
            <th>Option</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => {
            if (studentFilter === "All") {
              return (
                <tr className="student-data-row" key={student.id}>
                  <td>{index + 1}</td>
                  <td>
                    <Link to={`${student.id}`}>{student.fullname}</Link>
                  </td>
                  <td>{student.faculty}</td>
                  <td>{student.programStudy}</td>
                  <td>
                    <button
                      data-testid={`delete-${student.id}`}
                      onClick={() => handleDeleteBtn(student.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            }
            if (student.faculty === studentFilter) {
              return (
                <tr className="student-data-row" key={student.id}>
                  <td>{index + 1}</td>
                  <td>
                    <Link to={`${student.id}`}>{student.fullname}</Link>
                  </td>
                  <td>{student.faculty}</td>
                  <td>{student.programStudy}</td>
                  <td>
                    <button
                      data-testid={`delete-${student.id}`}
                      onClick={() => handleDeleteBtn(student.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    );
  };

  return (
    <>
      {/* TODO: answer here */}
      <NavBar />
      <p>Halaman student</p>
      {loading && <p>Loading ...</p>}
      {!loading && (
        <>
          <Filter />
          <StudentTable />
        </>
      )}
    </>
  );
};

export default Student;
