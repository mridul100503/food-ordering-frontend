import { User } from "@/types";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useGetMyUser=()=>{
    const{getAccessTokenSilently}=useAuth0();

    const getMyUserRequest=async():Promise<User>=>{
        const accessToken=await getAccessTokenSilently();
        const response=await fetch(`${API_BASE_URL}/api/my/user`,{
            method:"GET",
            headers:{
                Authorization:`Bearer ${accessToken}`,
                "Content-Type":"application/json",
            }
        })
        if (!response.ok) {
            const errorResponse = await response.json().catch(() => null);
            console.error("Server Error:", errorResponse);
            throw new Error(
                `Failed to fetch user: ${response.status} - ${errorResponse?.message ||
                (errorResponse?.errors && errorResponse.errors.map((e) => e.msg).join(", ")) ||
                "Unknown error"
                }`);
        }
        return response.json();

    }
    const{
        data:currentUser,
        isLoading,
        
        error
    }=useQuery({
        queryKey:["myUser"],
        queryFn:getMyUserRequest,
        
    });
    if(error){
        toast.error(error.toString());
       
    }
    return {currentUser,isLoading};
}

type CreateUserRequest = {
    auth0Id: string;
    email: string;
};

export const useCreateMyUser = () => {
    const { getAccessTokenSilently } = useAuth0();

    const createMyUserRequest = async (user: CreateUserRequest) => {
        try {
            const accessToken = await getAccessTokenSilently();
            console.log("Access Token:", accessToken);
            console.log("Create User Payload:", JSON.stringify(user));

            const response = await fetch(`${API_BASE_URL}/api/my/user`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });

            if (!response.ok) {
                const errorResponse = await response.json().catch(() => null);
                console.error("Server Error:", errorResponse);
                throw new Error(
                    `Failed to create user: ${response.status} - ${errorResponse?.message || 'Unknown error'}`
                );
            }
        } catch (error) {
            console.error("Request Error:", error);
            throw error;
        }
    };

    const {
        mutateAsync: createUser,
        isPending: isLoading,
        isError,
        isSuccess,
        error
    } = useMutation({
        mutationKey: ["createUser"],
        mutationFn: createMyUserRequest,
    });

    return {
        createUser,
        isLoading,
        isError,
        isSuccess,
        error
    };
};

type UpdateMyUserRequest = {
    name: string;
    addressLine1: string;
    city: string;
    country: string;
};

export const useUpdateMyUser = () => {
    const { getAccessTokenSilently } = useAuth0();

    const updateMyUserRequest = async (formData: UpdateMyUserRequest) => {
        try {
            const accessToken = await getAccessTokenSilently();
            console.log("Access Token:", accessToken);
            console.log("Update User Payload:", JSON.stringify(formData));

            const response = await fetch(`${API_BASE_URL}/api/my/user`, {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorResponse = await response.json().catch(() => null);
                console.error("Server Error:", errorResponse);
                throw new Error(
                    `Failed to update user: ${response.status} - ${errorResponse?.message ||
                    (errorResponse?.errors && errorResponse.errors.map((e) => e.msg).join(", ")) ||
                    "Unknown error"
                    }`);
            }
        } catch (error) {
            console.error("Request Error:", error);
            throw error;
        }
    };

    const {
        mutateAsync: updateUser,
        isPending: isLoading,
        
        isSuccess,
        error,
        reset
    } = useMutation({
        mutationKey: ["updateUser"],
        mutationFn: updateMyUserRequest,
    });

    if(isSuccess){
        toast.success("User updated successfully");
    }
    if(error){
        toast.error(error.toString());
        reset();
    }

    return { updateUser, isLoading, };
};
