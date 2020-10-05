import { utilService } from './util.service';
const contacts = [
    {
        id: utilService.makeId(),
        name: 'John Smith',
        img: 'john-smith.jpg',
        phone: '(123)456-7890',
        location: 'Riviera State 32/106',
        address: '795 Folsom Ave, Suite 600 San Francisco, CA 94107',
        company: 'twiter Inc',
        job: 'Graphic designer'
    },
    {
        id: utilService.makeId(),
        name: 'Alex Jonathan',
        img: 'alex-jonathan.jpg',
        phone: '(123)456-7890',
        location: 'Riviera State 32/106',
        address: '795 Folsom Ave, Suite 600 San Francisco, CA 94107',
        company: 'twiter Inc',
        job: 'CEO'
    },
    {
        id: utilService.makeId(),
        name: 'Monica Smith',
        img: 'monica-smith.jpg',
        phone: '(123)456-7890',
        location: 'Riviera State 32/106',
        address: '795 Folsom Ave, Suite 600 San Francisco, CA 94107',
        company: 'twiter Inc',
        job: 'Marketing Manager'
    },
    {
        id: utilService.makeId(),
        name: 'Michael Zimber',
        img: 'michael-zimber.jpg',
        phone: '(123)456-7890',
        location: 'Riviera State 32/106',
        address: '795 Folsom Ave, Suite 600 San Francisco, CA 94107',
        company: 'twiter Inc',
        job: 'Sales Manager'
    },
    {
        id: utilService.makeId(),
        name: 'Sandra Smith',
        img: 'sandra-smith.jpg',
        phone: '(123)456-7890',
        location: 'Riviera State 32/106',
        address: '795 Folsom Ave, Suite 600 San Francisco, CA 94107',
        company: 'twiter Inc',
        job: 'Graphic designer'
    },
    {
        id: utilService.makeId(),
        name: 'Janet Carton',
        img: 'janet-carton.jpg',
        phone: '(123)456-7890',
        location: 'Riviera State 32/106',
        address: '795 Folsom Ave, Suite 600 San Francisco, CA 94107',
        company: 'twiter Inc',
        job: 'Graphic designer'
    },
    {
        id: utilService.makeId(),
        name: 'Alex Jonathan',
        img: 'alex-jonathan.jpg',
        phone: '(123)456-7890',
        location: 'Riviera State 32/106',
        address: '795 Folsom Ave, Suite 600 San Francisco, CA 94107',
        company: 'twiter Inc',
        job: 'CEO'
    },
    {
        id: utilService.makeId(),
        name: 'John Smith',
        img: 'john-smith.jpg',
        phone: '(123)456-7890',
        location: 'Riviera State 32/106',
        address: '795 Folsom Ave, Suite 600 San Francisco, CA 94107',
        company: 'twiter Inc',
        job: 'Graphic designer'
    },
];

export const contactService = {
    add,
    remove,
    update,
    query,
    getContactBy
}

async function query() {
    return Promise.resolve(contacts);
}
function add(details) {
    const contact = _createContact(details);
    console.log({contact});
    contacts.push(contact);
    console.log({contacts});
    return Promise.resolve(contacts);
}

async function remove(id) {
    const contactIdx = await _getContactIdx(id);
    if (contactIdx !== -1) {
        contacts.splice(contactIdx, 1);
        return Promise.resolve(contacts);
    } else return Promise.reject(false);
}

async function update(contact) {
    const contactIdx = await _getContactIdx(contact.id);
    if (contactIdx !== -1) {
        contact.img = contacts[contactIdx].img;
        contacts.splice(contactIdx, 1, contact);
        return Promise.resolve(contacts);
    } else return Promise.reject(false);
}

function getContactBy(id) {
    return Promise.resolve(contacts.find(contact => contact.id === id));
}

function _getContactIdx(id) {
    return Promise.resolve(contacts.findIndex(contact => contact.id === id));

}
async function _getLocation() {
    return await fetch('https://maps.googleapis.com/maps/api/geocode/json?address=paris&key=AIzaSyDKvvBgAkSCugEbXckutuAFuqPzthsCnJ8');
}

function _createContact(details) {
    return {
        id: utilService.makeId(),
        name: details.name,
        img: details.img,
        phone: details.phone,
        address: details.address,
        location: '795 Folsom Ave, Suite 600 San Francisco, CA 94107',
        company: details.company,
        job: details.job
    }
}
