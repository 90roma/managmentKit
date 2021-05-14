import avatarDev from "../Avatar/avatar-dev.png";
import avatarMark from "../Avatar/avatar-mark.png";
import avatarDes from "../Avatar/avatar-des.png";
import avatarPdf from "../Avatar/avatar-pdf.png";
import avatarRoad from "../Avatar/avatar-road.png";
import avatarComment from "../Avatar/avatar-comment.png";
import avatarCommentDev from "../Avatar/avatar-comment-dev.png";

const TASKS = [{
    id: 1,
    title: "E-mail after registration so that I can confirm my address",
    author: "Kristin A.",
    createdAt: "yesterday at 11:40pm",
    asignTo: "Linzell Bowman",
    avatar: avatarDev,
    deadLine: "Tue, Dec 25",
    tags: ["development"],
    followers: [avatarDev, avatarMark, avatarDes],
    description: "Task Descriptions are used during project planning, project execution and project control. During project planning the task descriptions are used for scope planning and creating estimates. During project execution the task description is used by those doing the activities to ensure they are doing the work correctly.",
    files: [{id: 3, fileName: "Redesign Brief 2019.pdf", fileSize: "159 KB", filePreview: avatarPdf, fileType: "pdf", fileButton: "Delete"}, {id: 4, fileName: "Header.png", fileSize: "129 KB", filePreview: avatarRoad, fileType: "png", fileButton: "Delete"}],
    discussion: [{
        comment: "During a project build, it is necessary to evaluate the product design and development against project requirements and outcomes",
        avatar: avatarComment,
        date: "Yesterday at 12:37pm",
        name: "Helena Brauer, ",
        position: "Designer"
    }, {
        comment: "@Helena Software quality assurance activity in which one or several humans check a program mainly",
        avatar: avatarCommentDev,
        date: "Yesterday at 12:37pm",
        name: "Prescott MacCaffery,",
        position: "Developer"
    }]
}, {
    id: 2,
    title: "Find top 5 customers and get reviews from them",
    author: "Helena Brauer",
    createdAt: "yesterday at 12:41pm",
    asignTo: "Linzell Bowman",
    avatar: avatarMark,
    deadLine: "Tue, Dec 25",
    tags: ["marketing"],
    followers: [avatarDev, avatarMark, avatarDes],
    description: "Task Descriptions are used during project planning, project execution and project control. During project planning the task descriptions are used for scope planning and creating estimates. During project execution the task description is used by those doing the activities to ensure they are doing the work correctly.",
    files: [{fileName: "Redesign Brief 2019.pdf", fileSize: "159 KB", filePreview: avatarPdf, fileType: "pdf"}, {fileName: "Header.png", fileSize: "129 KB", filePreview: avatarRoad, fileType: "png"}],
    discussion: [{
        comment: "During a project build, it is necessary to evaluate the product design and development against project requirements and outcomes",
        avatar: avatarComment,
        date: "Yesterday at 12:37pm",
        name: "Helena Brauer, ",
        position: "Designer"
    }, {
        comment: "@Helena Software quality assurance activity in which one or several humans check a program mainly",
        avatar: avatarCommentDev,
        date: "Yesterday at 12:37pm",
        name: "Prescott MacCaffery,",
        position: "Developer"
    }]
}, {
    id: 3,
    title: "Two-factor authentication to make my private data more secure ",
    author: "Kristin A.",
    createdAt: "yesterday at 13:42pm",
    asignTo: "Linzell Bowman",
    avatar: avatarDes,
    deadLine: "Tue, Dec 25",
    tags: ["design"],
    followers: [avatarDev, avatarMark, avatarDes],
    description: "Task Descriptions are used during project planning, project execution and project control. During project planning the task descriptions are used for scope planning and creating estimates. During project execution the task description is used by those doing the activities to ensure they are doing the work correctly.",
    files: [{fileName: "Redesign Brief 2019.pdf", fileSize: "159 KB", filePreview: avatarPdf, fileType: "pdf"}, {fileName: "Header.png", fileSize: "129 KB", filePreview: avatarRoad, fileType: "png"}],
    discussion: [{
        comment: "During a project build, it is necessary to evaluate the product design and development against project requirements and outcomes",
        avatar: avatarComment,
        date: "Yesterday at 12:37pm",
        name: "Helena Brauer, ",
        position: "Designer"
    },{
        comment: "@Helena Software quality assurance activity in which one or several humans check a program mainly",
        avatar: avatarCommentDev,
        date: "Yesterday at 12:37pm",
        name: "Prescott MacCaffery,",
        position: "Developer"
    }]
}, {
    id: 4,
    title: "An option to search in current projects or in all projects",
    author: "Kristin A.",
    createdAt: "yesterday at 14:43pm",
    asignTo: "Linzell Bowman",
    avatar: avatarDes,
    deadLine: "Tue, Dec 25",
    tags: ["design"],
    followers: [avatarDev, avatarMark, avatarDes],
    description: "Task Descriptions are used during project planning, project execution and project control. During project planning the task descriptions are used for scope planning and creating estimates. During project execution the task description is used by those doing the activities to ensure they are doing the work correctly.",
    files: [{fileName: "Redesign Brief 2019.pdf", fileSize: "159 KB", filePreview: avatarPdf, fileType: "pdf"}, {fileName: "Header.png", fileSize: "129 KB", filePreview: avatarRoad, fileType: "png"}],
    discussion: [{
        comment: "During a project build, it is necessary to evaluate the product design and development against project requirements and outcomes",
        avatar: avatarComment,
        date: "Yesterday at 12:37pm",
        name: "Helena Brauer, ",
        position: "Designer"
    },{
        comment: "@Helena Software quality assurance activity in which one or several humans check a program mainly",
        avatar: avatarCommentDev,
        date: "Yesterday at 12:37pm",
        name: "Prescott MacCaffery,",
        position: "Developer"
    }]
}, {
    id: 5,
    title: "Account for teams and personal in bottom style",
    author: "Kristin A.",
    createdAt: "yesterday at 15:44pm",
    asignTo: "Linzell Bowman",
    deadLine: "Tue, Dec 25",
    avatar: avatarMark,
    tags: ["marketing"],
    followers: [avatarDev, avatarMark, avatarDes],
    description: "Task Descriptions are used during project planning, project execution and project control. During project planning the task descriptions are used for scope planning and creating estimates. During project execution the task description is used by those doing the activities to ensure they are doing the work correctly.",
    files: [{fileName: "Redesign Brief 2019.pdf", fileSize: "159 KB", filePreview: avatarPdf, fileType: "pdf"}, {fileName: "Header.png", fileSize: "129 KB", filePreview: avatarRoad, fileType: "png"}],
    discussion: [{
        comment: "During a project build, it is necessary to evaluate the product design and development against project requirements and outcomes",
        avatar: avatarComment,
        date: "Yesterday at 12:37pm",
        name: "Helena Brauer, ",
        position: "Designer"
    },{
        comment: "@Helena Software quality assurance activity in which one or several humans check a program mainly",
        avatar: avatarCommentDev,
        date: "Yesterday at 12:37pm",
        name: "Prescott MacCaffery,",
        position: "Developer"
    }]
}, {
    id: 6,
    title: "Listing on Product Hunt so that we can reach as many potential users",
    author: "Kristin A.",
    createdAt: "yesterday at 16:45pm",
    asignTo: "Linzell Bowman",
    deadLine: "Tue, Dec 25",
    avatar: avatarDes,
    tags: ["design"],
    followers: [avatarDev, avatarMark, avatarDes],
    description: "Task Descriptions are used during project planning, project execution and project control. During project planning the task descriptions are used for scope planning and creating estimates. During project execution the task description is used by those doing the activities to ensure they are doing the work correctly.",
    files: [{fileName: "Redesign Brief 2019.pdf", fileSize: "159 KB", filePreview: avatarPdf, fileType: "pdf"}, {fileName: "Header.png", fileSize: "129 KB", filePreview: avatarRoad, fileType: "png"}],
    discussion: [{
        comment: "During a project build, it is necessary to evaluate the product design and development against project requirements and outcomes",
        avatar: avatarComment,
        date: "Yesterday at 12:37pm",
        name: "Helena Brauer, ",
        position: "Designer"
    },{
        comment: "@Helena Software quality assurance activity in which one or several humans check a program mainly",
        avatar: avatarCommentDev,
        date: "Yesterday at 12:37pm",
        name: "Prescott MacCaffery,",
        position: "Developer"
    }]
}]

export {TASKS};