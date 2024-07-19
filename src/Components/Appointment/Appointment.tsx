
import { useForm } from 'react-hook-form'
import './Appointment.css'
import { useState } from 'react';

const Appointment = () => {

    const [getdetails, setgetdetails] = useState<{ name: string, doctor: string, date: number }[]>([]);
    const [isEditing, setIsEditing] = useState(false);
    const [currentIndex, setCurrentIndex] = useState<number | null>(null);

    const { register, handleSubmit, reset } = useForm()

    const Submitdetails = (data: any) => {

        if (isEditing) {
            const updatedDetails = getdetails.map((item, index) =>
                index === currentIndex ? data : item
            );
            setgetdetails(updatedDetails);
            setIsEditing(false);
            setCurrentIndex(null);
        } else {
            setgetdetails([...getdetails, data]);
        }

        reset({ name: "", doctor: '', date: "" });

    }

    const detailsdelete = (index: number) => {

        setgetdetails(getdetails.filter((_, i) => i !== index));
        //console.log("getdetails")
    }

    const detailsedit = (index: number) => {
        const patient = getdetails[index];
        reset(patient)
        setIsEditing(true);
        setCurrentIndex(index)

    }


    return (
        <>
            <div className="container cont-appoin">

           
             <div>

                <h2>Appointments</h2>

                <form action=""   onSubmit={handleSubmit((Submitdetails))}>

                    <label htmlFor="">Patient</label>
                    <br />
                    <input {...register("name", { required: true })} type="text" />
                    <br />


                    <label htmlFor="">Doctor</label>
                    <br />
                    <input {...register("doctor", { required: true })} type="text" />

                    <br />


                    <label htmlFor="">Date</label>
                    <br />
                    <input {...register("date", { required: true })} type="date" />
                    <br />

                    <br />


                    <button >submit</button>
                </form>
                </div>

                <div className='card-position-appoin'>

                <h2 style={{ textAlign: 'center', paddingBottom:'10px' }}>Appointment - {getdetails.length} </h2>

                    {

                        getdetails.map((data, index) =>
                        (<div className='card-appoin' key={index}>



                            <p>name : {data.name}</p>
                            <p>doctor : {data.doctor}</p>
                            <p>date : {data.date}</p>

                            <button className=' btn-edit-appoin' onClick={() => detailsedit(index)}>Edit</button>

                            <button className=' btn-delete-appoin' onClick={() => detailsdelete(index)}>delete</button>
                        </div>)
                        )}
                </div>
            </div>
        </>
    )
}

export default Appointment