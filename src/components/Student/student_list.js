import React, { useState, useEffect } from 'react';
import { useGetUsersQuery, useDeleteUserMutation } from '../../RTK/userAPI'; // RTK kütüphanesinden gerekli hookları alır
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS dosyasını ekler
import './student_list.css'; // Özel CSS dosyasını ekler
import { Link } from "react-router-dom"; // React Router DOM'dan Link bileşenini alır

const StudentList = () => {
    // Kullanıcı listesi için veri çekme, silme işlemi ve arama terimi için state'ler tanımlanır
    const { 
        data: users, // Kullanıcı verilerini içeren değişken
        isLoading, // Verilerin yükleniyor olup olmadığını belirten değişken
        isError, // Verilerin yüklenirken hata oluşup oluşmadığını belirten değişken
        isSuccess, // Verilerin başarıyla yüklendiğini belirten değişken
        error // Hata mesajını içeren değişken
    } = useGetUsersQuery(); // Kullanıcı verilerini almak için RTK hook'u kullanılır
    const [deleteUser] = useDeleteUserMutation(); // Kullanıcı silme işlemi için RTK hook'u kullanılır
    const [filter, setFilter] = useState(''); // Arama terimi için state tanımlanır
    const [isActive, setIsActive] = useState(false);

    // Arama kutusuna tıklanınca animasyonu tetikleyen fonksiyon
    const handleInputClick = () => {
      setIsActive(true); // isActive state'ini true yapar
    };
    // Arama terimi değiştiğinde tabloyu filtreleyen fonksiyon
    useEffect(() => {
        const filterTable = () => {
            const input = filter.toUpperCase(); // Arama terimini büyük harfe dönüştürür
            const table = document.getElementById("myTable"); // Tablo elementini alır
            const tr = table.getElementsByTagName("tr"); // Tablo satırlarını alır
            // Tablo satırlarını döngüye alarak arama işlemi yapılır
            for (let i = 0; i < tr.length; i++) {
                const td = tr[i].getElementsByTagName("td")[1]; // E-posta sütununu alır
                if (td) {
                    const txtValue = td.textContent || td.innerText; // E-posta değerini alır
                    // E-posta değeri arama terimini içeriyorsa satır görünür yapılır, aksi halde gizlenir
                    if (txtValue.toUpperCase().indexOf(input) > -1) {
                        tr[i].style.display = "";
                    } else {
                        tr[i].style.display = "none";
                    }
                }       
            }
        }
        filterTable(); // Filtreleme fonksiyonu çağrılır
    }, [filter]); // Arama terimi değiştiğinde useEffect çalıştırılır

    // Kullanıcı listesini ve arama kutusunu gösteren JSX dönülür
    return (
        <>
            <div>
                {isLoading && <h3>Loading...</h3>} {/* Veriler yüklenirken loading mesajı gösterilir */}
                {isError && <h3>Something went wrong</h3>} {/* Veriler yüklenirken hata oluşursa hata mesajı gösterilir */}
                {isSuccess && 
                    <div className="table-responsive-sm container"> {/* Bootstrap container sınıfı ile tablo responsive hale getirilir */}
                        <h2>Student List</h2> {/* Tablo başlığı */}
                        <input className={`search-input ${isActive ? 'active' : ''}`} type="text" id="myInput" onKeyUp={(e) => setFilter(e.target.value)} placeholder="Search for names.." title="Type in a name" onClick={handleInputClick}/> {/* Arama kutusu */}
                        <table className="table-blueviolet"  style={{ width: '100%', height: '100%', border: '2px solid blueviolet' }} id="myTable"> {/* Bootstrap table sınıfı ile tablo stilize edilir */}
                            <thead> {/* Tablo başlığı */}
                                <tr> {/* Tablo başlık sırası */}
                                    <th>ID</th> {/* ID sütunu */}
                                    <th>Email</th> {/* Email sütunu */}
                                    <th>Password</th> {/* Password sütunu */}
                                    <th>Actions</th> {/* İşlemler sütunu */}
                                </tr>
                            </thead>
                            <tbody> {/* Tablo içeriği */}
                                {/* Kullanıcı verileri map fonksiyonu ile döngüye alınarak tablo satırları oluşturulur */}
                                {users.map((student, index) => (
                                    <tr key={student.id}> {/* Her satır için benzersiz bir key belirtilir */}
                                        <td>{index + 1}</td> {/* ID değeri */}
                                        <td>{student.email}</td> {/* Email değeri */}
                                        <td>{student.password}</td> {/* Password değeri */}
                                        <td> {/* İşlemler için butonlar */}
                                            <button 
                                                className='btn btn-danger btn-delete' 
                                                onClick={() => deleteUser(student.id)}
                                            >
                                                Delete
                                            </button> {/* Silme butonu */}
                                            <Link 
                                                className='btn btn-primary btn-edit' 
                                                to={`/edit/${student.id}`}
                                                style={{ marginLeft: '10px' }}
                                            >
                                                Edit
                                            </Link> {/* Düzenleme butonu */}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                }
            </div>
        </>
    );
}

export default StudentList; // Bileşen dışa aktarılır
