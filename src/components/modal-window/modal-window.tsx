import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { TextArea } from "../ui/text-aria";
import { ModalProps } from "./types";

export function ModalWindow({children, modalTogger}: ModalProps){

    return(
        <div>
            <Input label="Название задачи"/>
            <TextArea label="Описание задачи"/>
            {children}
            <Button onClick={modalTogger}>
                Закрыть
            </Button>
        </div>
    )
}