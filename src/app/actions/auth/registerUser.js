"use server";
import dbConnect, { collectionNameObj } from "@/lib/dbConnect";

export const registerUser = async (payload) => {
  try {
    const userCollection =  dbConnect(collectionNameObj.USERS);

    // Check if user already exists
    const existingUser = await userCollection.findOne({ email: payload.email });
    
    if (existingUser) {
      throw new Error('User already exists with this email');
    }

    const result = await userCollection.insertOne(payload);
    if (!result.acknowledged) {
      throw new Error('Failed to create user');
    }

    return {
      data: { 
        ...payload,
        _id: result.insertedId 
      }
    };

  } catch (error) {
    throw error;
  }
};