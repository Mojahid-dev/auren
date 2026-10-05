"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ChartNoAxesColumnIncreasing,
  Eye,
  FileText,
  LockKeyhole,
  Mail,
  Phone,
  Store,
  UserRound,
  UsersRound,
} from "lucide-react";
import styles from "./register.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { basicDetailsSchema } from "@/app/schemas/basic-details";
import type { BasicDetailsForm } from "@/app/schemas/basic-details";

const benefits = [
  {
    icon: "people",
    title: "Real repair requests",
    copy: "Connect with customers in your area.",
  },
  {
    icon: "quote",
    title: "Transparent quoting",
    copy: "Keep every job organized and professional.",
  },
  {
    icon: "growth",
    title: "Grow your reputation",
    copy: "Build trust with verified reviews.",
  },
];

function BenefitIcon({ name }: { name: string }) {
  const iconProps = { "aria-hidden": true as const, strokeWidth: 2 };

  switch (name) {
    case "people":
      return <UsersRound {...iconProps} />;
    case "quote":
      return <FileText {...iconProps} />;
    default:
      return <ChartNoAxesColumnIncreasing {...iconProps} />;
  }
}

export default function PartnerRegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(basicDetailsSchema),
    defaultValues: {
      businessName: "",
      name: "",
      email: "",
      phone: "",
      password: "",
    },
  });
  const onSubmit: SubmitHandler<BasicDetailsForm> = (data) => {
    console.log(data);
  };

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.wordmark} href="/" aria-label="Auren home">
          AUREN
        </Link>
        <div className={styles.headerAction}>
          <span>Already have an account?</span>
          <Link href="/partner/login">Sign in</Link>
        </div>
      </header>

      <div className={styles.layout}>
        <div className={styles.artFrame}>
          <Image
            src="/bg-register.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className={styles.workshopArt}
          />
        </div>
        <div className={styles.artFade} />
        <section className={styles.intro}>
          <div className={styles.introContent}>
            <span className={styles.eyebrow}>For repair businesses</span>
            <h1>Grow your repair business with Auren.</h1>
            <p className={styles.introCopy}>
              Get repair requests, manage quotes, track repairs, and build trust
              with customers — all in one place.
            </p>
            <ul className={styles.benefits}>
              {benefits.map((benefit) => (
                <li key={benefit.title}>
                  <span className={styles.benefitIcon}>
                    <BenefitIcon name={benefit.icon} />
                  </span>
                  <span>
                    <strong>{benefit.title}</strong>
                    <small>{benefit.copy}</small>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className={styles.formSide} aria-labelledby="form-title">
          <div className={styles.card}>
            <div className={styles.steps} aria-label="Registration progress">
              <div className={`${styles.step} ${styles.active}`}>
                <span>1</span>
                <small>Basic details</small>
              </div>
              <i aria-hidden="true" />
              <div className={styles.step}>
                <span>2</span>
                <small>Business details</small>
              </div>
              <i aria-hidden="true" />
              <div className={styles.step}>
                <span>3</span>
                <small>Verification</small>
              </div>
            </div>
            <div className={styles.formHeading}>
              <h2 id="form-title">Create your repairer account</h2>
              <p>
                Start by telling us about your repair business and yourself.
              </p>
            </div>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
              <label>
                Business name
                <span className={styles.inputWrap}>
                  <Store aria-hidden="true" />
                  <input
                    type="text"
                    placeholder="Enter your business name"
                    {...register("businessName")}
                  />
                </span>
                {errors.businessName && (
                  <p className={styles.error}>{errors.businessName.message}</p>
                )}

              </label>
              <label>
                Owner name
                <span className={styles.inputWrap}>
                  <UserRound aria-hidden="true" />
                  <input
                    type="text"
                    placeholder="Enter owner’s full name"
                    {...register("name")}
                  />
                </span>
                {errors.name && (
                  <p className={styles.error}>
                    {errors.name.message}
                  </p>
                )}
              </label>
              <label>
                Your email
                <span className={styles.inputWrap}>
                  <Mail aria-hidden="true" />
                  <input
                    type="email"
                    placeholder="Enter your business email"
                    {...register("email")}
                  />
                </span>
                {errors.email && (
                  <p className={styles.error}>{errors.email.message}</p>
                )}
              </label>
              <label>
                Phone number
                <span className={`${styles.inputWrap} ${styles.phoneWrap}`}>
                  <input
                    type="tel"
                    placeholder="Enter phone number"
                    {...register("phone")}
                  />
                </span>
                {errors.phone && (
                  <p className={styles.error}>{errors.phone.message}</p>
                )}
              </label>
              <label>
                Password
                <span className={styles.inputWrap}>
                  <LockKeyhole aria-hidden="true" />
                  <input
                    type="password"
                    placeholder="Create a password"
                    {...register("password")}
                  />
                  <Eye aria-hidden="true" className={styles.trailingIcon} />
                </span>
                {errors.password && (
                  <p className={styles.error}>{errors.password.message}</p>
                )}
              </label>
              <p className={styles.hint}>
                Use at least 8 characters with a mix of letters, numbers and a
                symbol.
              </p>
              <button className={styles.continueButton} type="submit">
                Continue <ArrowRight aria-hidden="true" />
              </button>
            </form>
            <div className={styles.terms}>
              <span />{" "}
              <p>
                By continuing, you agree to Auren’s{" "}
                <Link href="#terms">Terms of Service</Link> and{" "}
                <Link href="#privacy">Privacy Policy</Link>.
              </p>{" "}
              <span />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
