import React from "react";
import Breadcrumb from "@/app/components/Breadcrumb";
import Image from "next/image";
import './page.css'

async function getMenuDetails(id: string) {
    try {
        const res = await fetch(`http://localhost:3000/api/menu/${id}`);

        if (!res.ok) {
            throw new Error(`Error fetching menu details: ${res.statusText}`);
        }

        return await res.json();
    } catch (error) {
        console.error('Error fetching data:', error);
        return null; // Retourner null en cas d'erreur
    }
}


export default async function MenuDetails({ params }: { params: { id: string } }) {
    const id = params.id;
    const food = await getMenuDetails(id);

    if (!food) {
        return <p>Menu details not found.</p>;
    }

    return (
        <main id="main">
            <Breadcrumb page='Détails des activités' />
            <section className="inner-page">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <Image
                                src={food.preview}
                                alt={food.name || "Image du menu"}
                                height={500}
                                width={500}
                                className="image img-fluid"
                            />
                        </div>
                        <div className="col-lg-6">
                            <h2 className="title mt-3">{food.name}</h2>
                            <p className="description mt-5">{food.description}</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
