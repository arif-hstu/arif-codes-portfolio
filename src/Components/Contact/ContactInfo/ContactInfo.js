import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';

import './ContactInfo.css';
import bar from '../../../resources/images/bar.png'

function ContactInfo() {

	const { register, handleSubmit, watch, formState: { errors } } = useForm();
	const onSubmit = data => console.log(data);

	console.log(watch("example"))

	return (
		<div className=" ContactInfo">
			<div className='titleHolder'>
				<h1>CONTACT ME</h1>
				<h1>LETS GET IN TOUCH</h1>
				<p className='smallPara'>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint inventore repudiandae ipsum aliquid hic sequi
				</p>
			</div>

			<div className="detailsHolder">
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="part1">
						<input placeHolder='Name' {...register("exampleRequired", { required: true })} />
						<input placeHolder='Contact No' {...register("exampleRequired", { required: true })} />
						<input placeHolder='Email' {...register("exampleRequired", { required: true })} />
					</div>
					<div className="part2">
						<input id='message' placeHolder='Type your message Here' {...register("exampleRequired", { required: true })} />
					</div>
					<div className="part3">
						<input id='primaryBtn' type="submit" />
						{errors.exampleRequired && <span>The field is required</span>}
					</div>
				</form>
			</div>
		</div>
	)
}

export default ContactInfo;