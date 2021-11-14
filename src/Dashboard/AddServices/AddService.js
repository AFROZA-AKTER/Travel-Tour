import { useForm } from "react-hook-form";
import './AddService.css'

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch(" https://glacial-tundra-74344.herokuapp.com/addServices", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if(result.insertedId){
                    alert('added successfully');
                    reset();
                }
              
            }

            );
        console.log(data);
    };
    return (
        <div className="add-service ">
            <h2 style={{ color: "#F97150" }} className="text-center mt-2">Add a tour package</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("title")} Placeholder="Title" />
                <textarea {...register("description")} Placeholder="Description" />
                <br />
                <input type="number" {...register("price")} Placeholder="Price" />
                <input type="number" {...register("people")} Placeholder="People" />
                <input type="text" {...register("duration")} Placeholder="Duration" />
                <input type="text" {...register("location")} Placeholder="Location" />
                <input {...register("img")} Placeholder="ImageUrl" />
                <input style={{ backgroundColor: "#F97150", color: "white" }} className="border-0 rounded" type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddService;