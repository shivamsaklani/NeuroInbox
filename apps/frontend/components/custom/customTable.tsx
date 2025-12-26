import {
    Table,
    TableBody,
    TableCell,
    TableRow,
} from "@/components/ui/table";
import { Star } from "lucide-react";
import { EmailMessageType } from "@/app/types/Emails";
import { useState } from "react";

const CustomTable = ({ emails }: { emails: EmailMessageType[] }) => {
    return (
        <Table>
            <TableBody>
                {emails.map((mail) => {
                    const [star, setstar] = useState<boolean>(false);
                    return (
                        <TableRow
                            key={mail.id}
                            className="cursor-pointer transition hover:bg-primary/10"
                        >
                            {/* Star */}
                            <TableCell
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setstar((prev) => !prev);
                                }}
                                className="w-8 cursor-pointer"
                            >
                                <Star
                                    className={`h-4 w-4 transition-colors ${star
                                            ? "fill-yellow-400 text-yellow-400"
                                            : "text-muted-foreground"
                                        }`}
                                />
                            </TableCell>


                            {/* Sender */}
                            <TableCell className="w-48 truncate text-sm font-medium">
                                {mail.sender}
                            </TableCell>

                            {/* Subject + preview */}
                            <TableCell className="truncate text-sm">
                                <span className="font-medium">{mail.subject}</span>
                                <span className="text-foreground">
                                    {" "}
                                    — {mail.preview}
                                </span>
                            </TableCell>

                            {/* Time */}
                            <TableCell className="whitespace-nowrap text-right text-xs text-muted-foreground">
                                {mail.time}
                            </TableCell>
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
    );
};

export default CustomTable;
