
import { useForm } from 'react-hook-form'
import './Doctor.css'
import { useState } from 'react';

const Doctor = () => {

    const [getdetails, setgetdetails] = useState<{ name: string, specialty: string }[]>([]);
    const [isEditing, setIsEditing] = useState(false);
    const [currentIndex, setCurrentIndex] = useState<number | null>(null);

    const { register, handleSubmit, reset, formState: { errors } } = useForm()

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

        reset({ name: "", specialty: '' });

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
            <div className="container cont-doctor">


                <div>

                    <h2>Doctor</h2>

                    <form action="" onSubmit={handleSubmit((Submitdetails))}>

                        <label htmlFor="">Patient</label>
                        <br />
                        <input {...register("name", { required: true })} type="text" />
                        {errors.name && <span>name is required</span>}
                        <br />


                        <label htmlFor="">Doctor</label>
                        <br />
                        <input {...register("specialty", { required: true })} type="text" />
                        {errors.specialty && <span>specialty is required</span>}

                        <br />

                        <br />


                        <button >submit</button>
                    </form>
                </div>

                <div className='card-position-doctor'>

                    <h2 style={{ textAlign: 'center', paddingBottom: '10px' }}>Appointment - {getdetails.length} </h2>

                    {

                        getdetails.map((data, index) =>
                        (<div className='card-doctor' key={index}>



                            <p>name : {data.name}</p>
                            <p>doctor : {data.specialty}</p>


                            <button className=' btn-edit-doctor' onClick={() => detailsedit(index)}>Edit</button>

                            <button className=' btn-delete-doctor' onClick={() => detailsdelete(index)}>delete</button>
                        </div>)
                        )}
                </div>
            </div>
        </>
    )
}

export default Doctor