import Image from "next/image";
import { Inter } from "next/font/google";
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
import axios from 'axios'
import { useState , useCallback } from "react";
import { generateKey } from "crypto";


export default function Home() {

  const [notes , setNotes] = useState([])
  const [subject , setSubject] = useState('')
  const [grade , setGrade] = useState()
  const [newObj , setNewObj] = useState({subject , grade})
  const backendUrl = 'http://localhost:3000/api/generate/route'
  const GenerateKey = (event) =>{
    event.preventDefault()
    console.log(event.target)
  }
  
  return (
    <main className="w-4/12 mt-56 ml-36">
       <form onSubmit={generateKey}>
      <div>
        <label htmlFor="topic">Topic</label>
        <Input
          id="topic"
          name="topic"
          placeholder="Maths, SST, Science, Geography, English etc..." 
          onChange={(e:any) => { setSubject(e.target.value) , console.log(subject)}}
          required
        />
      </div>
      <div className="mt-10">
        <label htmlFor="grade">Grade</label>
        <Select name="grade" onValueChange={(e:any) => {setGrade(e) , console.log(grade)}}>
          <SelectTrigger>
            <SelectValue placeholder="Grade"/>
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
      <Link href="/notes">
        <Button className="mt-10" type="submit">Generate</Button>
      </Link>
      </form>
    </main>
  );
}