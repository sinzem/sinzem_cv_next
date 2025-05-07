import * as sanitizeHtml from 'sanitize-html';

export const checkEmail = (email: string): boolean => {
    const emailPrepared = email.trim();
    const reg = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;

    return reg.test(emailPrepared);
}

export const sanitizeText = (str: string): string => {
    const checkMessage = sanitizeHtml(str, {
        allowedTags: ["em", "b", "i", "strong", "code", "a"],
        allowedAttributes: {
            a: [ 'href', "title" ],
        },
    });
    return checkMessage;
}