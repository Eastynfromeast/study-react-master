import { useForm } from "react-hook-form";

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

interface IFormData {
	email: string;
	firstName: string;
	lastName: string;
	password: string;
	password1: string;
	userName: string;
}

function ToDoList() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IFormData>();
	const onValid = (data: any) => {
		console.log(data);
	};

	console.log(errors);
	return (
		<div style={{ maxWidth: 480, margin: "0 auto" }}>
			<form
				style={{
					display: "flex",
					flexDirection: "column",
				}}
				onSubmit={handleSubmit(onValid)}
			>
				<input
					{...register("email", {
						required: "Email required",
						pattern: {
							value: /^[A-Za-z0-9._%+-]+@naver.com$/,
							message: "Only naver.com emails allowed",
						},
					})}
					placeholder="Email"
				/>
				<p>{errors?.email?.message}</p>
				<input
					{...register("firstName", {
						required: true,
					})}
					placeholder="First Name"
				/>
				<p>{errors?.firstName?.message}</p>
				<input
					{...register("lastName", {
						required: "Write your last name",
					})}
					placeholder="Last Name"
				/>
				<p>{errors?.lastName?.message}</p>
				<input
					{...register("userName", {
						required: true,
						minLength: {
							value: 10,
							message: "Your password is too short",
						},
					})}
					placeholder="User Name"
				/>
				<p>{errors?.userName?.message}</p>
				<input
					{...register("password", {
						required: "Password is required",
						min: {
							value: 5,
							message: "Password needs to be more than 5 letters",
						},
					})}
					placeholder="Password"
				/>

				<input
					{...register("password1", {
						required: "Password is required",
						min: {
							value: 5,
							message: "Password needs to be more than 5 letters",
						},
					})}
					placeholder="Password Validation"
				/>
				{errors.password && <p>{errors?.password?.message}</p>}
				<button>Add</button>
			</form>
		</div>
	);
}

export default ToDoList;
