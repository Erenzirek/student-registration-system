import axios from "axios";
import { useEffect, useState } from "react";

function CourseAdd() {

    const [tutorials, setTutorials] = useState("");
    useEffect(() => {
        const fetchAllStudents = async () => {
          try {
            const res = await axios.get("http://localhost:8800/courses");
            setTutorials(res.data);
            console.log(res);
            console.log(tutorials);
          } catch (err) {
            console.error("Failed to fetch tutorials:", err);
          }
        };
        fetchAllStudents();
      }, []);
    return(
        <>
            <div>
                <h1>Courses</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>CourseID</th>
                            {/* Diğer ders özellikleri için gerekli sütun başlıkları */}
                        </tr>
                    </thead>
                    <tbody>
                        {tutorials.map((course) => (
                            <tr key={course.CourseID}>
                                <td>{course.CourseID}</td>
                                <td>{course.CourseName}</td>
                                <td>{course.Description}</td>
                                {/* İhtiyaca göre diğer ders özellikleri için sütunlar */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div>
                <h1>Add Course</h1>
                <div>
                    // map array olacak dersler burda bir table olacak öğrenci ders ekleyince buraya düşecek
                </div>
            </div>
        </>
    );
    
}

export default CourseAdd;