"use client";
import OpenAI from "openai";
import { ChatCompletionAssistantMessageParam } from "openai/resources/index.mjs";
import { ReactNode, useState } from "react";
import Checkbox from "./components/Checkbox";

interface workoutTYPE {
  name: string;
  bodyPart: string;
  sets: number;
  reps: number[];
}
const prompt: ChatCompletionAssistantMessageParam = {
  role: "assistant",
  content:
    "give me 5 workouts in this format. [{ name: 'Squats', bodyPart: 'Legs', sets: 3, reps: [10, 10, 10] }]. i want just the json, no extra texts",
};

const work_img_map = [
  {
    name: "Push-ups",
    img: "https://cdn-icons-png.flaticon.com/512/5151/5151223.png",
  },
  {
    name: "Squats",
    img: "https://static.thenounproject.com/png/4097013-200.png",
  },
];

const work = [
  { name: "Squats", bodyPart: "Legs", sets: 3, reps: [10, 10, 10] },
  { name: "Push-ups", bodyPart: "Chest", sets: 3, reps: [15, 15, 15] },
  {
    name: "Shoulder Press",
    bodyPart: "Shoulders",
    sets: 3,
    reps: [12, 12, 12],
  },
  { name: "Lunges", bodyPart: "Legs", sets: 3, reps: [10, 10, 10] },
  {
    name: "Dumbbell Bicep Curls",
    bodyPart: "Arms",
    sets: 3,
    reps: [12, 12, 12],
  },
];

const Chat = () => {
  const [query, setQuery] = useState<ChatCompletionAssistantMessageParam>({
    role: "assistant",
    content: "",
  });
  const [answer, setAnswer] = useState<null | Array<workoutTYPE>>();
  const api_key = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
  const openai = new OpenAI({ apiKey: api_key, dangerouslyAllowBrowser: true });

  const handleClick = async () => {
    const completion = await openai.chat.completions.create({
      messages: [prompt],
      model: "gpt-3.5-turbo",
    });

    console.log(completion.choices[0].message);
    // setAnswer(JSON.parse(completion?.choices[0]?.message?.content));
  };
  const handleChange = (e: any) => {
    setQuery((prev) => ({ ...prev, content: e.target.value }));
  };
  return (
    <div className="p-8 m-auto flex flex-col gap-4 h-full">
      <div className="bg-gray-300 w-full h-[50vh] text-black p-4 flex gap-4">
        {answer?.map((item, index) => {
          return (
            <div key={index} className=" bg-gray-200 shadow-xl p-4 rounded-md">
              <div className="w-20 h-20">
                <img
                  src={
                    work_img_map.map((itm, index): string => {
                      return itm.name === item.name ? itm.img : "";
                    })[0]
                  }
                  alt=""
                />
              </div>
              <h1 className="font-bold text-xl">{item.name}</h1>
              <p>{item.bodyPart}</p>
              <p>
                {item.reps.map((item, index) => {
                  return <Checkbox itm={item} key={index} />;
                })}
              </p>
              <p>{item.sets}</p>
            </div>
          );
        })}
      </div>
      <input type="text" className="p-4 text-black" onChange={handleChange} />
      <button className="bg-green-400 p-4" onClick={handleClick}>
        Send
      </button>
    </div>
  );
};

export default Chat;
