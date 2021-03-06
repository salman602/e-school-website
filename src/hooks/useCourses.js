import { useEffect } from "react";
import { useState } from "react";

const useCourses = () => {
    // creating custom hook
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('/courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);
    return [courses];
};
export default useCourses;