import { useState } from 'react';
import './Patients.css'
import { useForm } from 'react-hook-form'


const Patients = () => {

    const [getdetails, setgetdetails] = useState<{ name: string, age: number, gender: string }[]>([]);
    const [isEditing, setIsEditing] = useState(false);
    const [currentIndex, setCurrentIndex] = useState<number | null>(null);

    const { register, handleSubmit, reset, formState: { errors } } = useForm()




    //console.log(getdetails)

    const Submitdetails = (data: any) => {


        //console.log("Submit",data)
        //console.log(data.name)

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

        reset({ name: "", age: '', gender: "" });

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
        <div className='container cont'>
            
            <div>

            <h2>Add New Patients</h2>

                <form action="" onSubmit={handleSubmit((Submitdetails))}>

                    <label htmlFor="">Name</label>
                    <br />
                    <input {...register("name", { required: true })} type="text" />
                    <br />
                    {errors.name && <span>Name is required</span>}

                    <label htmlFor="">Age</label>
                    <br />
                    <input {...register("age", { required: true })} type="number" />

                    <br />
                    {errors.age && <span>Age is required</span>}

                    <label htmlFor="">Gender</label>
                    <br />
                    <input {...register("gender", { required: true })} type="text" />
                    <br />
                    {errors.gender && <span>Gender is required</span>}
                    <br />


                    <button >{isEditing ? 'Update' : 'Submit'}</button>
                </form>


            </div>





            {/*  */}

            <div className='card-position'>

            <h2 style={{ textAlign: 'center', paddingBottom:'10px' }}>Patient - {getdetails.length} </h2>

                {

                    getdetails.map((data, index) =>
                    (<div className='card' key={index}>



                        <p>name : {data.name}</p>
                        <p>age : {data.age}</p>
                        <p>gender : {data.gender}</p>

                        <button className=' btn-edit' onClick={() => detailsedit(index)}>Edit</button>

                        <button className=' btn-delete' onClick={() => detailsdelete(index)}>delete</button>
                    </div>)
                    )}
            </div>














        </div>


    )
}

export default Patients