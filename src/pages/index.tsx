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

export default function Home() {
  return (
    <main className="w-4/12 mt-56 ml-36">
      <div>
        <label htmlFor="topic">Topic</label>
        <Input id="topic" placeholder="Maths, SST, Science, Geography, English" />
      </div>
      <div className="mt-10">
        <label htmlFor="grade">Grade</label>
        <Select>
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
      <Button className="mt-10">Generate</Button>
    </main>
  );
}
