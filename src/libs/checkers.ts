export const checkEmail = (email: string): boolean => {
    const emailPrepared = email.trim();
    const reg = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;

    return reg.test(emailPrepared);
}