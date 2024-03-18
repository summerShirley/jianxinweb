const users = [
    { username: 'xjq', role: '普通用户' },
    { username: 'xjq1', role: '主任' },
    { username: 'xjq2', role: '厂长' },
    { username: 'admin', role: '管理员' }
];

export const login = (username: string, password: string) => {
    const user = users.find(user => user.username === username);

    if (!user) {
        return { success: false, message: '用户不存在' };
    }

    // 模拟简单的密码验证
    if (password !== '123456') {
        return { success: false, message: '密码错误' };
    }

    return { success: true, user };
};