import { AlertStatus, useToast } from "@chakra-ui/react";

const useMessage = () => {
    const toast  = useToast();
  return (title:string,description:string,status:AlertStatus)=> toast({
        title: title,
        description: description,
        status: status,
        duration: 3500,
        isClosable: true,
      });
};
export default useMessage;