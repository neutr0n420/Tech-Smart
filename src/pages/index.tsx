import Image from "next/image";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useState, ChangeEvent, FormEvent, useCallback } from "react";
import axios from 'axios';
import { Router, useRouter } from "next/router";


 const Home: React.FC = ()=> {
  const [notesAndShit, setNotes] = useState([]);
  const [subject, setSubject] = useState('');
  const [grade, setGrade] = useState('9');

  const options = ["1st", "2nd", "3rd", "4th","5th", "6th", "7th", "8th", "9th", "10th"]

  const baseUrl = 'http://localhost:3000/api/generate/route'
  const router = useRouter()
  const handleSubmit = async(e:any) => {
    e.preventDefault();
    const newObj = {
      topic: subject,
      grade: grade
    }
    axios.post(baseUrl , newObj).then(res => {
    setNotes(res?.data?.result)
    console.log(notesAndShit)
    }).catch(err => console.error(err))
    router.push({
      pathname:'/notes',
      query: {data: notesAndShit},
    }) 
  }

  return (
    <main className="w-4/12 mt-56 ml-36">
      <form onSubmit={handleSubmit}>
        {/* Rest of the code remains unchanged */}
         <div>
          <label htmlFor="topic">Topic</label>
          <Input
            id="topic"
            name="topic"
            placeholder="Maths, SST, Science, Geography, English etc..."
            onChange={(e: ChangeEvent<HTMLInputElement>) => { setSubject(e.target.value); console.log(subject); }}
            required
          />
        </div>
        <div className="mt-10">
          <label htmlFor="grade">Grade</label> 
          {/* <Select name="grade" onValueChange={(e: string) => { setGrade(e); console.log(grade); }}>
            <SelectTrigger>
              <SelectValue placeholder="Grade" />
            </SelectTrigger>
            <SelectContent>
              {options.map((option, index) => (
                <SelectItem key={index} value={String(option)}>
                  {option}th
                </SelectItem>
              ))}
            </SelectContent>
          </Select> */}
          
          <select className="outline">
            <option>Please choose one option</option>
            {options.map((option, index) => (
              <option key={index}>
                {option}
              </option>
            ))}
          </select>
        </div>
        {/* <Link href="/notes"> */}
          <Button className="mt-10" type="submit">Generate</Button>
        {/* </Link> */}
      </form>

    </main>
  );
}

export default Home