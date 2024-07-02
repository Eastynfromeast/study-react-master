import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

/* function ToDoList() {
	const [toDo, setToDo] = useState("");
	const onChange = (event: React.FormEvent<HTMLInputElement>) => {
		const {
			currentTarget: { value },
		} = event;
		setToDo(value);
	};
	const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log(toDo);
	};
	return (
		<div>
			<form onSubmit={onSubmit}>
				<input value={toDo} onChange={onChange} placeholder="Write a to do" type="text" />
				<button>Add</button>
			</form>
		</div>
	);
} */

function ToDoList() {
	const { register, watch } = useForm();
	console.log(watch());

	return (
		<div>
			<form>
				<input {...register("email")} placeholder="Email" />
				<input {...register("firstName")} placeholder="First Name" />
				<input {...register("lastName")} placeholder="Last Name" />
				<input {...register("userName")} placeholder="User Name" />
				<input {...register("password")} placeholder="Password" />
				<input {...register("pwValidation")} placeholder="Password Validation" />
				<button>Add</button>
			</form>
		</div>
	);
}

export default ToDoList;
