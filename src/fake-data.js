const GROUP_ID_1 = '1234';
const GROUP_ID_2 = '2345';
const GROUP_ID_3 = '3456';

const USER_ID_1 = 'bmA4TKPxvfUBI5JPMKY7NXQHQbG2';
const USER_ID_2 = 'l1xCn11mvgUsA9Uo8g0mUfJSAb43';
const USER_ID_3 = 'DmEGvRIVpUgQB0tOczRbDhsjsJG2';

module.exports.groups = [{
    id: GROUP_ID_1,
    name: 'The Cool People Group',
    ownerId: USER_ID_1,
    members: [USER_ID_1, USER_ID_3],
}, {
    id: GROUP_ID_2,
    name: 'Programmers Unite',
    ownerId: USER_ID_2,
    members: [USER_ID_2, USER_ID_1],
}, {
    id: GROUP_ID_3,
    name: 'DIYers Group',
    ownerId: USER_ID_3,
    members: [USER_ID_3, USER_ID_2],
}];

module.exports.requests = [{
    id: '123',
    userId: USER_ID_3,
    groupId: GROUP_ID_2,
}, {
    id: '234',
    userId: USER_ID_1,
    groupId: GROUP_ID_3,
}, {
    id: '345',
    userId: USER_ID_2,
    groupId: GROUP_ID_1,
}];

module.exports.messages = [{
    userId: USER_ID_1,
    groupId: GROUP_ID_1,
    text: 'Hello everyone!'
}, {
    userId: USER_ID_3,
    groupId: GROUP_ID_1,
    text: 'Hey Victor, welcome to the group!'
}, {
    userId: USER_ID_2,
    groupId: GROUP_ID_2,
    text: 'Good morning programmers, let\'s write some code',
}, {
    userId: USER_ID_1,
    groupId: GROUP_ID_2,
    text: 'Yes indeed, let\'s.',
}, {
    userId: USER_ID_3,
    groupId: GROUP_ID_3,
    text: 'I built ten tables yesterday. I think I have an obsession',
}, {
    userId: USER_ID_2,
    groupId: GROUP_ID_3,
    text: 'Only ten?',
}];

module.exports.users = [{
    id: USER_ID_1,
    email: 'busond5@gmail.com',
    fullName: 'Victor Hugo',
}, {
    id: USER_ID_2,
    email: 'smith@gmail.com',
    fullName: 'John Smith',
}, {
    id: USER_ID_3,
    email: 'jones@gmail.com',
    fullName: 'Hannah Jones',
}];