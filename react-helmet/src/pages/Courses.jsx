import React from "react";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import "../styles/courses.css";

const courses = [
   {
      id: 1,
      title: "Artificial Intelligence",
      university: "Stanford University",
      tags: ["Computer Science", "Artificial Intelligence"],
   },
   {
      id: 2,
      title: "Introduction to Game Development",
      university: "Harvard University",
      tags: ["Computer Science", "Game Development"],
   },
   {
      id: 3,
      title: "Introduction to Bioengineering",
      university: "MIT",
      tags: ["Science"],
   },
   {
      id: 4,
      title: "Full-Stack Web Development",
      university: "University of California, Berkeley",
      tags: ["Computer Science", "Web Development"],
   },
   {
      id: 5,
      title: "Machine Learning & AI Fundamentals",
      university: "University of Toronto",
      tags: ["Computer Science", "Artificial Intelligence", "Machine Learning"],
   },
   {
      id: 6,
      title: "Cybersecurity & Ethical Hacking",
      university: "Johns Hopkins University",
      tags: ["Computer Science", "Artificial Intelligence"],
   },
   {
      id: 7,
      title: "Mobile App Development (iOS & Android)",
      university: "Columbia University",
      tags: ["Computer Science", "Mobile Development"],
   },
   {
      id: 8,
      title: "Data Structures & Algorithms",
      university: "Princeton University",
      tags: ["Computer Science", "Algorithms"],
   },
   {
      id: 9,
      title: "Digital Marketing Strategies",
      university: "Harvard Business School",
      tags: ["Business & Management", "Marketing"],
   },
   {
      id: 10,
      title: "Financial Accounting Basics",
      university: "University of Pennsylvania",
      tags: ["Business & Management"],
   },
   {
      id: 11,
      title: "Project Management & Agile Methodologies",
      university: "MIT Sloan School of Management",
      tags: ["Business & Management", "Project Management"],
   },
   {
      id: 12,
      title: "Human Anatomy & Physiology",
      university: "Duke University",
      tags: ["Science", "Health & Medicine"],
   },
   {
      id: 13,
      title: "Environmental Science & Sustainability",
      university: "Yale University",
      tags: ["Science", "Sustainability"],
   },
   {
      id: 14,
      title: "Psychology: Understanding Human Behavior",
      university: "University of Cambridge",
      tags: ["Social Sciences", "Psychology"],
   },
   {
      id: 15,
      title: "Political Science & International Relations",
      university: "London School of Economics",
      tags: ["Social Sciences", "Political Science"],
   } 
];
 
export default function Courses() {
   const [searchTerm, setSearchTerm] = useState("");
   const [selectedCategory, setSelectedCategory] = useState("");

   const filteredCourses = courses.filter((course) => {
      const matchesSearch = course.title
         .toLowerCase()
         .includes(searchTerm.toLowerCase());
      const matchesCategory =
         selectedCategory === "" || course.tags.includes(selectedCategory);
      return matchesSearch && matchesCategory;
   });

   return (
      <div>
         <Helmet>
            <title>Courses | OpenCourse</title>
            <meta name="description" content="Browse free courses from top universities like MIT, Stanford, and Harvard." />
            <meta name="keywords" content="Online Courses, Free Learning, MIT Courses, Stanford Courses, Harvard Courses" />
            <meta name="author" content="Open Course" />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href="/courses"/>
         </Helmet>
         
         <div className="courses-container">
            {/* Search Bar */}
            <div className="search-section">
               <p>Explore Our Course Catalog</p>
               <input
                  type="text"
                  placeholder="Search courses..."
                  className="search-bar"
                  onChange={(e) => setSearchTerm(e.target.value)}
               />
            </div>

            <div className="content">
            {/* Sidebar Filter */}
            <div className="sidebar">
               <h3>Categories</h3>
               {["Computer Science", "Artificial Intelligence", "Game Development", "Web Development", "Machine Learning", "Algorithms", "Business & Management", "Psychology", "Project Management", "Science", "Social Sciences"].map((category) => (
                  <div key={category} className="category">
                  <input
                     type="checkbox"
                     checked={selectedCategory === category}
                     onChange={() =>
                        setSelectedCategory(selectedCategory === category ? "" : category)
                     }
                  />
                  <label>{category}</label>
                  </div>
               ))}
            </div>

            {/* Course Cards */}
            <div className="course-grid">
               {filteredCourses.map((course) => (
                  <div key={course.id} className="course-card">
                  <h4>{course.title}</h4>
                  <p className="university">{course.university}</p>
                  <div className="tags">
                     {course.tags.map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                     ))}
                  </div>
                  </div>
               ))}
            </div>
            </div>
         </div>
      </div>
   );
}