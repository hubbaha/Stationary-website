'use client'
import AboutUs from '@/components/AboutUs';
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa6";
import React, { useState, useEffect } from 'react'; 
import { IoLogoInstagram } from 'react-icons/io5';
import Link from 'next/link';

const App = () => { 
	const [name, setName] = useState(''); 
	const [email, setEmail] = useState(''); 
	const [password, setPassword] = useState(''); 
	const [errors, setErrors] = useState({}); 
	const [isFormValid, setIsFormValid] = useState(false); 

	useEffect(() => { 
		validateForm(); 
	}, [name, email, password]); 
	// Validate form 
	const validateForm = () => { 
		let errors = {}; 

		if (!name) { 
			errors.name = 'Name is required.'; 
		} 

		if (!email) { 
			errors.email = 'Email is required.'; 
		} else if (!/\S+@\S+\.\S+/.test(email)) { 
			errors.email = 'Email is invalid.'; 
		} 

		if (!password) { 
			errors.password = 'Password is required.'; 
		} else if (password.length < 6) { 
			errors.password = 'Password must be at least 6 characters.'; 
		} 

		setErrors(errors); 
		setIsFormValid(Object.keys(errors).length === 0); 
	}; 
	// Submit 
	const handleSubmit = () => { 
		if (isFormValid) { 
			console.log('Form submitted successfully!'); 
		} else { 
			console.log('Form has errors. Please correct them.'); 
		} 
	}; 

	return ( 
    <div>
		<div className='container flex justify-center items-center min-h-[100vh]'> 
			<div className=' p-7 rounded-lg  border-gray-200 shadow-lg mx-auto max-w-[400px] w-[100%] my-5'> 
				<h1 className='text-blackish mb-4 text-2xl  font-serif font-medium text-center  underline decoration-accent '> 
					CREATE ACCOUNT
				</h1> 
                <h3 className='text-gray-500 text-sm text-center mb-4'>Sign In With  </h3>
                
                <div className='flex items-center justify-center gap-3 mb-6 '>
                    <Link className=' bg-gray-200 rounded-md p-[6px] text-[18px] cursor-pointer hover:bg-accent hover:text-white' href='https://www.facebook.com/'>
                    <FaFacebook />
                    </Link>
                    <Link className='  bg-gray-200 rounded-md p-[6px] text-[18px]  cursor-pointer hover:bg-accent hover:text-white' href='https://www.instagram.com/'>
                    <IoLogoInstagram />
                    </Link>
                    <Link className=' bg-gray-200 rounded-md p-[6px] text-[18px] cursor-pointer hover:bg-accent hover:text-white' href='https://www.google.com/'>
                    <FaGoogle />
                    </Link>
                </div>
               
              
                
				<input 
					className='w-[100%] p-2 mb-1 font-normal border border-solid rounded-md border-gray-300 text-md'
					placeholder=" Full Name"
					value={name} 
					onChange={(e) => setName(e.target.value)} 
				/> 
				{errors.name && <p className='text-[#ff0824] text-xs mb-2 '>{errors.name}</p>} 
				<input 
					className='w-[100%] p-2 mb-2 font-normal border border-solid rounded-md border-gray-300 text-md'
					placeholder="Email"
					value={email} 
					onChange={(e) => setEmail(e.target.value)} 
				/> 
				{errors.email && <p className='text-[#ff0824] text-xs mb-2'>{errors.email}</p>} 
				<input 
					className='w-[100%] p-2 mb-2 font-normal border border-solid rounded-md border-gray-300 text-md'
					placeholder="Password"
					value={password} 
					onChange={(e) => setPassword(e.target.value)} 
					type="password"
				/> 
				{errors.password && <p className='text-[#ff0824] text-xs mb-2'>{errors.password}</p>}


				<button 
                    className='bg-accent py-2 px-4 mt-5 rounded-full transition-opacity cursor-pointer'
					// style={{ ...styles.button, opacity: isFormValid ? 1 : 0.5 }} 
					disabled={!isFormValid} 
					onClick={handleSubmit} 
				> 
					Submit 
				</button> 
			</div> 
        </div>
            <AboutUs></AboutUs>
        
	</div> 
	); 
}; 

const styles = { 
	container: { 
		display: 'flex', 
		alignItems: 'center', 
		justifyContent: 'center', 
		minHeight: '100vh', 
		backgroundColor: '#f0f0f0', 
	}, 
	heading: { 
		fontWeight: 'bold', 
		fontSize: '25px', 
		color: "green", 
		textAlign: "center", 
	}, 
	subHeading: { 
		fontWeight: 'bold', 
		fontSize: '25px', 
		textAlign: "center", 

	}, 
	form: { 
		backgroundColor: '#fff', 
		padding: '20px', 
		borderRadius: '8px', 
		boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', 
		width: '100%', 
		maxWidth: '400px', 
		margin: '0 auto', 
	}, 
	input: { 
		width: '100%', 
		padding: '12px', 
		marginBottom: '12px', 
		border: '1px solid #ccc', 
		borderRadius: '10px', 
		fontSize: '16px', 
		transition: 'border-color 0.2s ease', 
	}, 
	button: { 
		backgroundColor: 'green', 
		color: '#fff', 
		fontWeight: 'bold', 
		fontSize: '16px', 
		padding: '12px', 
		border: 'none', 
		borderRadius: '10px', 
		cursor: 'pointer', 
		width: '40%', 
		transition: 'opacity 0.2s ease', 
	}, 
	error: { 
		color: 'red', 
		fontSize: '14px', 
		marginBottom: '6px', 
	}, 
}; 

export default App;
