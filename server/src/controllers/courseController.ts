import type { Request, Response } from "express";
import Course from "../models/courseModel.ts";


export const listCourses = async (
    req: Request,
     res: Response
    ) :Promise<void> => {
      const {category} = req.query;
      try{
        const Courses =
        category && category !== "All"
            ? await Course.scan("category").eq(category).exec()
            : await Course.scan().exec();
        res.json({message : "Courses retrieved successfully", data: Courses});
        }catch(error){
          res.status(500).json({message : "Error retrieving courses", error});
        }

      };

export const getCourse = async (req: Request, res: Response): Promise<void> => {
    const { courseId } = req.params as { courseId: string };
    try{
        const course = await Course.get(courseId);
        if(!course){
            res.status(404).json({message : "Course not found"});
            return;
        }
        res.json({message : "Course retrieved successfully", data: course});
    }catch(error){
        res.status(500).json({message : "Error retrieving course", error});
    }
};

