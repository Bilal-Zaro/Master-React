import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Swal from "sweetalert2";
import { Eye, EyeOff, CheckCircle2 } from "lucide-react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";// تعريف الـ schema باستخدام Yup
const schema = yup.object().shape({
  name: yup.string().required("Name is required"), // حقل الاسم الكامل
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(
      /[^A-Za-z0-9]/,
      "Password must contain at least one special character"
    )
    .required("Password is required"),
});

export default function Register() {
  const [isFocused, setIsFocused] = useState(false);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const password = watch("password", "");
  const passwordStrength = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[^A-Za-z0-9]/.test(password),
  };

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      // إرسال البيانات إلى الخادم
      const response = await axios.post(
        "http://localhost:5000/api/users/register",
        {
          name: data.name,
          email: data.email,
          password: data.password,
        }
      );

      if (response.data.message === "User registered successfully") {
        Swal.fire({
          icon: "success",
          title: "Welcome!",
          text: "Your account has been successfully created.",
          confirmButtonText: "Continue",
          customClass: {
            confirmButton: "bg-teal-500 text-white px-4 py-2 rounded-lg",
          },
        }).then(() => {
          navigate("/verify-email");
        });
      } else {
        throw new Error(response.data.message || "Registration failed");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text: error.response?.data?.message || error.message,
        confirmButtonText: "Try Again",
        customClass: {
          confirmButton: "bg-teal-500 text-white px-4 py-2 rounded-lg",
        },
      });
    } finally {
      setIsLoading(false);
    }
  };

  

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Section */}
      <div className="md:w-1/2 bg-gradient-to-br from-teal-400 via-cyan-500 to-blue-500 p-8 flex items-center justify-center">
        <div className="max-w-md text-white">
          <h1 className="text-5xl font-bold mb-6">Join Us!</h1>
          <p className="text-lg opacity-90">
            Create your account to manage tasks, track progress, and collaborate
            with your team.
          </p>
          <div className="mt-12 space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Secure Access</h3>
                <p className="text-sm opacity-75">
                  Your data is protected with enterprise-grade security
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Lightning Fast</h3>
                <p className="text-sm opacity-75">
                  Optimized for speed and performance
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 bg-white p-8 flex items-center justify-center">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Create your account
            </h2>
            <p className="mt-2 text-gray-600">Enter your details below</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
            {/* حقل الاسم الكامل */}
            <div>
              <div className="relative">
                <input
                  type="text"
                  {...register("name")}
                  className="w-full px-4 h-12 peer border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:border-teal-500 focus:outline-none"
                  placeholder="Name"
                  id="name"
                />
                <label
                  htmlFor="name"
                  className="absolute left-4 -top-5 text-sm text-gray-600 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 transition-all peer-focus:-top-5 peer-focus:text-sm peer-focus:text-teal-500"
                >
                  Name
                </label>
              </div>
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* حقل البريد الإلكتروني */}
            <div>
              <div className="relative">
                <input
                  type="email"
                  {...register("email")}
                  className="w-full px-4 h-12 peer border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:border-teal-500 focus:outline-none"
                  placeholder="Email"
                  id="email"
                />
                <label
                  htmlFor="email"
                  className="absolute left-4 -top-5 text-sm text-gray-600 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 transition-all peer-focus:-top-5 peer-focus:text-sm peer-focus:text-teal-500"
                >
                  Email Address
                </label>
              </div>
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* حقل كلمة المرور */}
            <div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password")}
                  className="w-full px-4 h-12 peer border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:border-teal-500 focus:outline-none"
                  placeholder="Password"
                  id="password"
                  onFocus={() => setIsFocused(true)}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget)) {
                      setIsFocused(false);
                    }
                  }}
                />
                <label
                  htmlFor="password"
                  className="absolute left-4 -top-5 text-sm text-gray-600 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 transition-all peer-focus:-top-5 peer-focus:text-sm peer-focus:text-teal-500"
                >
                  Password
                </label>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-3 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.password.message}
                </p>
              )}

              {/* قوة كلمة المرور */}
              <div className="mt-4 overflow-hidden">
                <div
                  className={`space-y-2 transition-all duration-300 ease-in-out ${
                    isFocused ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    maxHeight: isFocused ? "200px" : "0",
                    transition:
                      "max-height 300ms ease-in-out, opacity 300ms ease-in-out",
                  }}
                >
                  {Object.entries(passwordStrength).map(
                    ([key, value], index) => (
                      <div
                        key={key}
                        className="flex items-center space-x-2"
                        style={{
                          opacity: isFocused ? 1 : 0,
                          transition: `opacity 300ms ease-in-out ${
                            index * 50
                          }ms`,
                        }}
                      >
                        <CheckCircle2
                          className={`h-4 w-4 transition-colors duration-300 ${
                            value ? "text-green-500" : "text-gray-300"
                          }`}
                        />
                        <span
                          className={`text-sm transition-colors duration-300 ${
                            value ? "text-green-500" : "text-gray-500"
                          }`}
                        >
                          {key.charAt(0).toUpperCase() + key.slice(1)}:
                          {key === "length" && " minimum 8 characters"}
                          {key === "uppercase" && " one uppercase letter"}
                          {key === "lowercase" && " one lowercase letter"}
                          {key === "number" && " one number"}
                          {key === "special" && " one special character"}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* الأزرار */}
            <div className="space-y-4">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full text-white bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Creating Account..." : "Create Account"}
              </button>

              <button
                type="button"
                onClick={handleGoogleSignIn}
                className="w-full flex items-center justify-center py-3 px-4 border border-gray-300 rounded-full text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
              >
                <img
                  src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                  alt="Google logo"
                  className="w-5 h-5 mr-2"
                />
                Continue with Google
              </button>
            </div>
          </form>

          {/* رابط تسجيل الدخول */}
          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-teal-500 hover:text-teal-600"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
