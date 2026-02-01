"use client";

import { useForm, Controller } from "react-hook-form";
import { Input } from "../Input";
import { Button } from "../Button";
import { Select } from "../Select";
import emailjs from '@emailjs/browser';
import toast from "react-hot-toast";
import { useState } from "react";

interface FormValues {
    name: string;
    email: string;
    phone: string;
    service: string;
    timeline?: string;
    projectDescription?: string;
}

export const ContactForm = () => {
    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormValues>({
        mode: "all",
        reValidateMode: "onChange",
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            service: "",
            timeline: "",
            projectDescription: "",
        },
    });
    const [loading, setLoading] = useState<boolean>(false)
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

    const onSubmit = (data: FormValues) => {
        setLoading(true)
        console.log("Form Data:", data);
        emailjs.send(
            serviceId,
            templateId,
            {
                name: data.name,
                email: data.email,
                phone: data.phone,
                service: data.service,
                timeline: data.timeline ?? "",
                projectDescription: data.projectDescription ?? "",
            },
            publicKey
        )
            .then(
                () => {
                    reset({
                        name: "",
                        email: "",
                        phone: "",
                        service: "",
                        timeline: "",
                        projectDescription: "",
                    });
                    setLoading(false)
                    toast.success("Successfully Submitted!")
                    console.log('Successfully Submitted!');
                },
                (error) => {
                    toast.error('Submission Failed. Please try again.')
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col w-full max-w-[1012px] gap-[30px]"
        >
            <div className="flex flex-col md:flex-row gap-[30px] w-full">
                <Controller
                    name="name"
                    control={control}
                    rules={{ required: "Name is required" }}
                    render={({ field }) => (
                        <Input
                            {...field}
                            id="name_id"
                            label="Name"
                            variant="outlined"
                            error={!!errors.name}
                            helperText={errors.name?.message}
                        />
                    )}
                />

                <Controller
                    name="email"
                    control={control}
                    rules={{
                        required: "Email is required",
                        pattern: {
                            value: /^\S+@\S+$/i,
                            message: "Invalid email address",
                        },
                    }}
                    render={({ field }) => (
                        <Input
                            {...field}
                            id="email_id"
                            label="Email"
                            variant="outlined"
                            error={!!errors.email}
                            helperText={errors.email?.message}
                        />
                    )}
                />
            </div>

            <div className="flex flex-col md:flex-row gap-[30px] w-full">
                <Controller
                    name="phone"
                    control={control}
                    rules={{
                        required: "Phone number is required",
                        pattern: {
                            value: /^[0-9]+$/,
                            message: "Only numbers are allowed",
                        },
                    }}
                    render={({ field }) => (
                        <Input
                            {...field}
                            id="phone_number_id"
                            label="Phone Number"
                            variant="outlined"
                            error={!!errors.phone}
                            helperText={errors.phone?.message}
                        />
                    )}
                />
                <Controller
                    name="service"
                    control={control}
                    rules={{ required: "Please select a service" }}
                    render={({ field }) => (
                        <Select
                            {...field}
                            label="Service of Interest"
                            variant="outlined"
                            options={[
                                { label: "Mern Stack Developer", value: "Mern Stack Developer" },
                                { label: "Frontend Developer", value: "Frontend Developer" },
                                { label: "Backend Developer", value: "Backend Developer" },
                            ]}
                            error={!!errors.service}
                            helperText={errors.service?.message}
                        />
                    )}
                />
            </div>

            <div className="flex flex-col md:flex-row gap-[30px] w-full items-start">
                <Controller
                    name="timeline"
                    control={control}
                    rules={{ required: false }}
                    render={({ field }) => (
                        <Input
                            {...field}
                            id="timeline_id"
                            label="TimeLine"
                            variant="outlined"
                        />
                    )}
                />
                <Controller
                    name="projectDescription"
                    control={control}
                    rules={{ required: false }}
                    render={({ field }) => (
                        <Input
                            {...field}
                            id="project_description_id"
                            label="Project Description"
                            multiline
                            rows={3}
                            variant="outlined"
                        />
                    )}
                />
            </div>

            <div className="flex justify-center md:justify-end w-full">
                <Button
                    borderRadius="corner"
                    color="white"
                    size="lg"
                    text={loading ? "Loading..." : "Send"}
                    type="submit"
                    disabled={loading}
                    variant="outlined"
                    className="px-[1.5rem] py-[0.5rem] md:px-[1.75rem] md:py-[0.625rem] lg:px-[2.5rem] lg:py-[0.75rem]"
                />
            </div>
        </form>
    );
};

