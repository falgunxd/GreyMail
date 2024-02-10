import { request } from "express";
import Email from "../model/email.js";


export const saveSentEmails = (req, res) => {
    try {
        const email = new Email(req.body);
        email.save();

        res.status(200).json("Email saved successfully");
    }
    catch (error) {
        res.status(500).json(error.message);
    }
}

export const getEmails = async (req, res) => {
    try {
        let emails;
        // if (req.params.type === "sent") {
        //     emails = await Email.find({ type: req.params.type })
        // }
        if (req.params.type === "bin") {
            emails = await Email.find({bin: "true"});
        }
        else if (req.params.type === "allmail") {
            emails = await Email.find({})
        }
        else if (req.params.type === "starred") {
            emails = await Email.find({ starred: true, bin: false})
        }
        else 
            emails= await Email.find({type: req.params.type})
        return res.status(200).json(emails);
    }
    catch (err) {
        console.log(err);
        res.status(500).send("there was an error getting response from email-controller ", err.message);
    }
}
export const moveEmailsToBin = async (req, res) => {
    try {
        await Email.updateMany({_id: { $in: req.body }}, { $set: {bin: true, starred: false, type: ""}} )
        return res.status(200).json("emails deleted successfully")
    }
    catch (err) {
        console.log(err);
        res.status(500).send("there was an error getting response from email-controller ", err.message);
    }
}
export const toggleStarredEmails = async (req, res) => {
    try {
        await Email.updateOne({_id: req.body.id}, {$set: { starred: req.body.value }})
        return res.status(200).json("email star toggled successfully");
    }
    catch (err) {
        console.log(err);
        res.status(500).send("there was an error getting response from email-controller ", err.message);
    }
}
export const deleteEmails = async( req, res) => {
    try {
        await Email.deleteMany({_id: { $in: req.body}})
        return res.status(200).json("Emails deleted successfully");
    }
    catch (err) {
        console.log(err);
        res.status(500).send("there was an error getting response from email-controller ", err.message);
    }
}