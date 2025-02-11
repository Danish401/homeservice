
import React from "react";
import { Button } from "@mui/material";
import Input from "./Input";
import { Search } from "lucide-react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

function Hero() {
  const isDarkMode = useSelector((state) => state.bookings.isDarkMode);
  const { t } = useTranslation(); // Initialize useTranslation

  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 p-8 ${
        isDarkMode ? "bg-gray-800" : "bg-[#7d66d9]"
      } text-white`}
    >
      {/* Heading */}
      <motion.h2
        className="font-bold text-[46px] text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        {t("findService")}
      </motion.h2>

      {/* Subheading */}
      <motion.h2
        className="text-xl text-[#ABBDF9]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        {t("exploreService")}
      </motion.h2>

      {/* Search Section */}
      <motion.div
        className="flex items-center gap-4 mt-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <Input
          placeholder={t("searchPlaceholder")}
          className={`rounded-full md:w-[350px] ${
            isDarkMode ? "bg-gray-700 text-white" : "bg-[#E6E7FF] text-[#26292B]"
          } p-2`}
        />
        <Button
          variant="contained"
          className={`rounded-full h-[46px] ${
            isDarkMode ? "bg-[#9B9EF0] hover:bg-[#7F57F1]" : "bg-[#9B9EF0] hover:bg-[#7F57F1]"
          } text-white`}
        >
          <Search className="w-4 h-4" />
        </Button>
      </motion.div>
    </div>
  );
}

export default Hero;
