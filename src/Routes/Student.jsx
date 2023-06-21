// TODO: answer here

import { useEffect, useState } from "react";
import NavBar from "../components/Navbar";
import { Link } from "react-router-dom";
import {
  Container,
  Select,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Button,
  TableContainer,
} from "@chakra-ui/react";

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
      <Select
        id="filter"
        name="filter-faculty"
        data-testid="filter"
        value={studentFilter}
        maxW="30%"
        mb="2rem"
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
      </Select>
    );
  };

  const StudentTable = () => {
    return (
      <TableContainer overflowX="unset" overflowY="unset">
        <Table id="table-student" variant="simple" size="lg">
          <TableCaption fontSize=".75rem" textDecoration="underline">
            Student Data
          </TableCaption>
          <Thead position="sticky" top={0} zIndex="docked" bg="blue.400">
            <Tr>
              <Th color="white">No</Th>
              <Th color="white">Full Name</Th>
              <Th color="white">Faculty</Th>
              <Th color="white">Program Study</Th>
              <Th color="white">Option</Th>
            </Tr>
          </Thead>
          <Tbody>
            {students.map((student, index) => {
              if (studentFilter === "All") {
                return (
                  <Tr className="student-data-row" key={student.id}>
                    <Td>{index + 1}</Td>
                    <Td>
                      <Link to={`${student.id}`}>{student.fullname}</Link>
                    </Td>
                    <Td>{student.faculty}</Td>
                    <Td>{student.programStudy}</Td>
                    <Td>
                      <Button
                        colorScheme="red"
                        data-testid={`delete-${student.id}`}
                        fontSize=".85rem"
                        onClick={() => handleDeleteBtn(student.id)}
                      >
                        Delete
                      </Button>
                    </Td>
                  </Tr>
                );
              }
              if (student.faculty === studentFilter) {
                return (
                  <Tr className="student-data-row" key={student.id}>
                    <Td>{index + 1}</Td>
                    <Td>
                      <Link to={`${student.id}`}>{student.fullname}</Link>
                    </Td>
                    <Td>{student.faculty}</Td>
                    <Td>{student.programStudy}</Td>
                    <Td>
                      <Button
                        colorScheme="red"
                        fontSize=".85rem"
                        data-testid={`delete-${student.id}`}
                        onClick={() => handleDeleteBtn(student.id)}
                      >
                        Delete
                      </Button>
                    </Td>
                  </Tr>
                );
              }
            })}
          </Tbody>
        </Table>
      </TableContainer>
    );
  };

  return (
    <>
      {/* TODO: answer here */}
      <NavBar />
      <Container maxW="80%">
        <p>Halaman student</p>
        {loading && <p>Loading ...</p>}
        {!loading && (
          <>
            <Filter />
            <StudentTable />
          </>
        )}
      </Container>
    </>
  );
};

export default Student;
