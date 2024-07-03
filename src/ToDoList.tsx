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
	userName: string;
	password: string;
	password1: string;
	extraError?: string;
}

function ToDoList() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		setError,
	} = useForm<IFormData>({
		defaultValues: {
			email: "@naver.com",
		},
	});
	const onValid = (data: IFormData) => {
		if (data.password !== data.password1) {
			setError("password1", { message: "Password are not the same" }, { shouldFocus: true });
		}
		// setError("extraError", { message: "Server offline." });
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
						required: "Write your first name",
						validate: {
							noJane: value => (value.includes("jane") ? "no jane allowed" : true),
							noDoe: value => (value.includes("doe") ? "no doe allowed" : true),
						},
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
							value: 4,
							message: "Your name is too short",
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
				<p>{errors?.password1?.message}</p>
				<button>Add</button>
				<p>{errors?.extraError?.message}</p>
			</form>
		</div>
	);
}

export default ToDoList;
