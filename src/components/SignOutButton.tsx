"use client"

import * as React from 'react';
import { FunctionComponent, useState } from 'react';
import Button from './ui/Button';
import { signOut } from 'next-auth/react';

interface SignOutButtonProps {
}

const SignOutButton: FunctionComponent<SignOutButtonProps> = ({}) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const signUserOut = async () => {
        setIsLoading(true);

        try {
            await signOut();
        } catch (error) {
            /* toast({
                title: 'Error signing out',
                message: 'Please try again later',
                type: 'error',
            }) */
        }
    }

  return (
  <Button onClick={signUserOut} isLoading={isLoading}>
    Sign out
  </Button>
  );
};

export default SignOutButton;
