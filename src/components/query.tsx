import { FC, FormEvent, useState } from "react"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Button } from "./ui/button";
import axios from 'axios'

interface QueryFormProps { }

const QueryForm: FC<QueryFormProps> = ({ }) => {
	const [subject, setSubject] = useState<string>('')
	const [grade, setGrade] = useState<string>('')
	const [notesAndShit , setNotes] = useState<string>('Hey Teacher We are working Together')
	const baseUrl = '/api/generate/route'
	const handleSubmit = async(e:any) => {
		setNotes('Wait a Bit Im Thinking...')
		e.preventDefault();
		const newObj = {
		topic: subject,
		grade: grade
		}
		axios.post(baseUrl , newObj).then(res => {
		console.log(res)
		setNotes(res?.data?.result)
		}).catch(err => console.error(err))
		} 
 	 

	return (
		<form onSubmit={handleSubmit}>
			<div className="flex flex-col items-start md:flex-row md:items-center gap-4 mt-10">
				<div>
					<Label className="sr-only" htmlFor="topic">Topic</Label>

					<Input
						id="topic"
						name="topic"
						placeholder="Maths, SST, Science, Geography, English etc..."
						onChange={(e: any) => {
							setSubject(e.target.value)
							console.log(e.target.value)
						}}
						required
					/>
				</div>

				<div>
					<Label className="sr-only" htmlFor="grade">Grade</Label>

					<Select name="grade" onValueChange={(e: any) => {
						setGrade(e)
						console.log(e)
					}}>

						<SelectTrigger>
							<SelectValue placeholder="Grade" />
						</SelectTrigger>

						<SelectContent>
							<SelectItem value="1">1st</SelectItem>
							<SelectItem value="2">2nd</SelectItem>
							<SelectItem value="3">3rd</SelectItem>
							<SelectItem value="4">4th</SelectItem>
							<SelectItem value="5">5th</SelectItem>
							<SelectItem value="6">6th</SelectItem>
							<SelectItem value="7">7th</SelectItem>
							<SelectItem value="8">8th</SelectItem>
							<SelectItem value="9">9th</SelectItem>
							<SelectItem value="10">10th</SelectItem>
						</SelectContent>

					</Select>
				</div>

				<Button type="submit">Generate</Button>

			</div>
			<br/>
			<br/>
			<br/>
			{notesAndShit}
		</form>
	)
}

export default QueryForm