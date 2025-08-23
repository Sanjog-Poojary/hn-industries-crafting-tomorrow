import { useState } from 'react';

export interface FormErrors {
  [key: string]: string;
}

export interface FormData {
  name: string;
  email: string;
  mobile: string;
  state: string;
  city: string;
  message: string;
}

const useFormValidation = () => {
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = (data: FormData): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!data.name.trim()) {
      newErrors.name = 'Full name is required';
    } else if (data.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!emailRegex.test(data.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Mobile validation
    const mobileRegex = /^[6-9]\d{9}$/;
    if (!data.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!mobileRegex.test(data.mobile.replace(/\D/g, ''))) {
      newErrors.mobile = 'Please enter a valid 10-digit mobile number';
    }

    // State validation
    if (!data.state) {
      newErrors.state = 'Please select your state';
    }

    // City validation
    if (!data.city.trim()) {
      newErrors.city = 'City is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submitForm = async (data: FormData): Promise<boolean> => {
    if (!validateForm(data)) return false;

    setIsSubmitting(true);
    setErrors({});

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsSuccess(true);
      
      // Reset success state after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
      
      return true;
    } catch (error) {
      setErrors({ submit: 'Failed to submit enquiry. Please try again.' });
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  const clearError = (field: string) => {
    setErrors(prev => ({ ...prev, [field]: '' }));
  };

  return {
    errors,
    isSubmitting,
    isSuccess,
    validateForm,
    submitForm,
    clearError
  };
};

export default useFormValidation;