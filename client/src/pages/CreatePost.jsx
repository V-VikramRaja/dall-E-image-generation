import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { preview } from "../assets-2";
import { getRandomPrompt } from "../utils/index";
import { FormField, Loader } from "../components";

const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", prompt: "", photo: "" });
  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {};
  const handleChange = (e) => {};
  const handleSurpriceMe = (e) => {};

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">Create</h1>
        <p className="mt-2 text-[#666e75] text-[14px] max-w[500px]">
          Create imaginative and visually stunning images through Dall-e Ai and
          share them with the community
        </p>
      </div>

      <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <FormField
            LabelName="Your name"
            type="text"
            name="name"
            placeholder="Jhon Doe"
            value={form.name}
            handleChange={handleChange}
          />
          <FormField
            LabelName="Your name"
            type="text"
            name="prompt"
            placeholder="Ex: panda mad scientist mixing sparkling chemicals, digital art"
            value={form.prompt}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriceMe={handleSurpriceMe}
          />
        </div>
      </form>
    </section>
  );
};

export default CreatePost;
