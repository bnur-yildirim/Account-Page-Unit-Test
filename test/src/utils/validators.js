// src/utils/validators.js

export const validateName = (name) => {
    if (!name || name.trim() === '') return 'Name is required';
    if (name.length < 2) return 'Name must be at least 2 characters';
    if (name.length > 30) return 'Name must be less than 30 characters';
    if (!/^[A-Za-zÇçĞğİıÖöŞşÜü\s]+$/.test(name)) return 'Name must contain only letters';
    return '';
  };
  
  export const validateEmail = (email) => {
    if (!email) return 'Email is required';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return 'Invalid email format';
    return '';
  };
  
  export const validatePassword = (password) => {
    if (!password) return 'Password is required';
    if (password.length < 8) return 'Password must be at least 8 characters';
    if (!/[A-Z]/.test(password)) return 'Password must contain an uppercase letter';
    if (!/[a-z]/.test(password)) return 'Password must contain a lowercase letter';
    if (!/[0-9]/.test(password)) return 'Password must contain a number';
    if (!/[^A-Za-z0-9]/.test(password)) return 'Password must contain a special character';
    return '';
  };
  
  export const validateConfirmPassword = (password, confirmPassword) => {
    if (!confirmPassword) return 'Confirm password is required';
    if (password !== confirmPassword) return 'Passwords do not match';
    return '';
  };
  
  export const validateDateOfBirth = (dob) => {
    if (!dob) return 'Date of birth is required';
    const dobRegex = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!dobRegex.test(dob)) return 'Date must be in dd/mm/yyyy format';
  
    const [day, month, year] = dob.split('/').map(Number);
    const date = new Date(year, month - 1, day);
    const now = new Date();
  
    if (date > now) return 'Date of birth cannot be in the future';
  
    const age = now.getFullYear() - year;
    if (age < 13) return 'You must be at least 13 years old';
  
    return '';
  };
  