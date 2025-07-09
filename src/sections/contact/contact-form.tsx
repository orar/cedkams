"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import React from 'react';
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import { useTranslation } from "@/i18n/client"
import {Tr} from "@/types";
import {fallbackLng, languages} from "@/i18n/settings";
import {useParams} from "next/navigation";

const formSchema = (t: Tr) => z.object({
  name: z.string().min(2, {
    message: t("contact.form.name_min"),
  }),
  email: z.string().email({
    message: t("contact.form.email_invalid")
  }),
  phone: z.string().min(9, {
    message: t("contact.form.phone_min")
  }).max(15, {
    message: t("contact.form.phone_max")
  }),
  message: z.string().min(2, {
    message: t("contact.form.message_min")
  }).max(1500, {
    message: t("contact.form.message_max")
  }),
  subject: z.string().min(2, {
    message: t("contact.form.subject_min")
  }).max(120, {
    message: t("contact.form.subject_max")
  })
})

export default function ContactForm() {
  let { lng } = useParams<{lng: string}>()
  if (languages.indexOf(lng) < 0) lng = fallbackLng
  const { t } = useTranslation(lng, 'landing')
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const schema = formSchema(t)
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      subject: "",
    },
  })

  React.useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => setIsSubmitted(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);

  async function onSubmit(values: z.infer<typeof schema>) {
    try {
      setIsSubmitting(true);
      // Handle form submission
      console.log(values);
      setIsSubmitted(true); // Show success message
      form.reset(); // Optionally reset the form
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      {isSubmitted && (
        <div className="p-4 mb-4 rounded bg-green-100 text-green-800 border border-green-300 text-center font-semibold">
          {t("contact.form.success_message") || "Your message has been sent successfully!"}
        </div>
      )}
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("contact.form.full_name")}</FormLabel>
              <FormControl>
                <Input placeholder={t("contact.form.full_name_placeholder")} {...field} className="text-lg py-5" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("contact.form.phone_number")}</FormLabel>
                <FormControl>
                  <Input placeholder={t("contact.form.phone_number_placeholder")} {...field} className="text-lg py-5" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("contact.form.email_address")}</FormLabel>
                <FormControl>
                  <Input placeholder={t("contact.form.email_address_placeholder")} {...field} className="text-lg py-5" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("contact.form.subject")}</FormLabel>
              <FormControl>
                <Input placeholder={t("contact.form.subject_placeholder")} {...field} className="text-lg py-5" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("contact.form.message")}</FormLabel>
              <FormControl>
                <Textarea rows={10} placeholder={t("contact.form.message_placeholder")} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div>
          <Button type="submit" size="lg" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : t("contact.form.send_message_btn")}
          </Button>
        </div>
      </form>
    </Form>
  )
}
