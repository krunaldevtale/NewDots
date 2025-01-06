const driver = window.driver.js.driver;

const driverObj = driver({
    showProgress: true,
    stagePadding: 2,
    nextBtnText: "Next",
    prevBtnText: "Back",
    steps: [
        { popover: { title: 'Welcome to the Overview Tour 👋 ', description: 'The Overview page offers a quick summary of system performance, user activity, and file storage usage, helping you monitor and manage your system efficiently.' } },
        { element: '#overview', popover: { title: 'Overview Tab', description: 'Provides a summary of system usage and performance, including user statistics, file usage, and system health.' } },
        { element: '.user-card', popover: { title: 'Total No. of Users', description: 'Displays the total number of users registered in the system, along with their online or offline status.' } },
        { element: '.file-card', popover: { title: 'Space Used', description: 'Shows the total amount of storage used by files in the system, including the number of files and the amount of space saved.' } },
        { element: '.access-card', popover: { title: 'Access Today', description: 'Tracks the number of file operations performed today, such as uploads, downloads, edits, and deletions, along with user activity.' } },
        { element: '.system-card', popover: { title: 'System Score', description: 'Indicates the overall system performance, displaying metrics for disk usage, storage, speed, and other system components.' } },
        {
            element: '.space-container',
            popover: {
                title: 'User Space',
                description: 'Lists individual users along with their allocated and used storage space, and the date of their account creation.',
                onNextClick: () => {
                    document.getElementById("user-space-tab").classList.remove('active')
                    document.getElementById("user-space-btn").classList.remove('active')
                    document.getElementById("group-space-tab").classList.add('active')
                    driverObj.moveNext();
                },
            },
        },
        {
            element: '.space-container',
            popover: {
                title: 'Group Space',
                description: 'Lists individual users along with their allocated and used storage space, and the date of their account creation.'
            },
            onDeselected: () => {
                document.getElementById("group-space-tab").classList.remove('active')
                document.getElementById("group-space-btn").classList.add('active')
                document.getElementById("user-space-tab").classList.add('active')
            }
        },
        { element: '#file-usage-ratio', popover: { title: 'File Usage Ratio', description: 'Visual representation of file storage distribution among users, groups, and other categories in a pie chart format.' } },
        { element: '.graph-container', popover: { title: 'User Data', description: 'Visual representation of file storage distribution among users, groups, and other categories in a pie chart format.' } },
    ]
});



    driverObj.drive();
