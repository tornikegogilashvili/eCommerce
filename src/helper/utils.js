export const isUserAdmin = (user) => {
    return user?.role?.includes("admin");
    
};

export const getUserInitials = (user) => {
    if(user?.firstName && user?.lastName) {
        return `${user.firstName.charAt(0).toUpperCase()}${user.lastName.charAt(0).toUpperCase()}`;
    }

    return "";
};