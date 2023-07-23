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

interface QueryFormProps { }

const QueryForm: FC<QueryFormProps> = ({ }) => {
	const [subject, setSubject] = useState<string>('')
	const [grade, setGrade] = useState<string>('')

	const generateKey = (e: FormEvent) => {
		e.preventDefault()
		console.log(e.target)
		try {
			const response = fetch("/api/generate", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ topic: subject, grade: grade }),
			});
		} catch (error: any) {
			// Consider implementing your own error handling logic here
			console.error(error);
			alert(error.message);
		}
	}

	return (
		<form onSubmit={generateKey}>
			<div className="flex flex-row items-center gap-4 mt-10">
				<div>
					<Label className="sr-only" htmlFor="topic">Topic</Label>

					<Input
						id="topic"
						name="topic"
						placeholder="Maths, SST, Science, Geography, English etc..."
						onChange={(e: any) => { setSubject(e.target.value), console.log(subject) }}
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
		</form>
	)
}

export default QueryForm
