import React, { useState } from 'react';

function TabloUygulamasi() {
    const [veriler, setVeriler] = useState([
        {
            "id": 1,
            "ad": "John",
            "soyad": "Doe",
            "yaş": 30
        },
        {
            "id": 2,
            "ad": "Jane",
            "soyad": "Smith",
            "yaş": 28
        },
        // Diğer veri öğeleri
    ]);

    return (
        <div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Ad</th>
                            <th>Soyad</th>
                            <th>Yaş</th>
                        </tr>
                    </thead>
                    <tbody>
                        {veriler.map((veri) => (
                            <tr key={veri.id}>
                                <td>{veri.id}</td>
                                <td>{veri.ad}</td>
                                <td>{veri.soyad}</td>
                                <td>{veri.yaş}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>    </div>
    );
}

export default TabloUygulamasi;

