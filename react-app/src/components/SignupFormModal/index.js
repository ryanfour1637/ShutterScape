import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useModal } from "../../context/Modal";
import { signUp } from "../../store/session";
import "./SignupForm.css";

function SignupFormModal() {
	const dispatch = useDispatch();
	const { push } = useHistory();
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [age, setAge] = useState("");
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [errors, setErrors] = useState([]);
	const { closeModal } = useModal();


	const handleSubmit = async (e) => {
		e.preventDefault();

		let newErrors = {};

		if (!firstName) newErrors.firstName = "First name is required";
		if (!lastName) newErrors.lastName = "Last name is required";
		if (!email.includes("@")) newErrors.email = "Must be a valid email";
		if (username.length <= 4) newErrors.username = "username must be greater than four characters";
		if (password.length < 6) newErrors.password = "Password must be at least six characters";
		if (password !== confirmPassword) newErrors.confirmPassword = "Confirm Password field must be the same as the Password field";
		if (isNaN(age) || age <= 0) newErrors.age = "Age must be a positive number";

		if (Object.keys(newErrors).length === 0) {
			const data = await dispatch(signUp(firstName, lastName, age, username, email, password));
			if (data) {
				setErrors(data);
			} else {
				closeModal();
			}
		} else {
			setErrors(newErrors);
		}
	};

	return (
		<>
			<h1 className="Sign-up-h1">Sign Up for ShutterScape</h1>
			<form onSubmit={handleSubmit}>
				<label>
					{errors.firstName && <p className="error">{errors.firstName}</p>}
					<input
						type="text"
						placeholder="First Name"
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
						required
					/>
				</label>
				<label>
					{errors.lastName && <p className="error">{errors.lastName}</p>}
					<input
						type="text"
						placeholder="Last Name"
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
						required
					/>
				</label>
				<label>
					{errors.age && <p className="error">{errors.age}</p>}
					<input
						type="text"
						placeholder="Age"
						value={age}
						onChange={(e) => setAge(e.target.value)}
						required
					/>
				</label>
				<label>
					{errors.email && <p className="error">{errors.email}</p>}
					<input
						type="text"
						placeholder="Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</label>
				<label>
					{errors.username && <p className="error">{errors.username}</p>}
					<input
						type="text"
						placeholder="Username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						required
					/>
				</label>
				<label>
					{errors.password && <p className="error">{errors.password}</p>}
					<input
						type="password"
						placeholder="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</label>
				<label>
					{errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
					<input
						type="password"
						placeholder="Confirm Password"
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
						required
					/>
				</label>
				<button type="submit">Sign Up</button>
			</form>

		</>
	);
}

export default SignupFormModal;
