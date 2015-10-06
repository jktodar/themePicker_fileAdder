angular.module("MyApp",[])
	
	.controller('TaskController', function(){
		var showTheme = false;
		var showTask = false;

	})
	.controller('ThemeController', function (){

		var self = this;
	

	self.redValue = {
		class: { 
			primary:	'redPrimary',
			secondary: 'redSecondary',
			tertiary: 'redTertiary',
			title: 'redTitle'
		}
	};

	self.blueValue = {
		class: { 
			primary:	'bluePrimary',
			secondary: 'blueSecondary',
			tertiary: 'blueTertiary',
			title: 'blueTitle'
		}
		
	};

	self.greenValue = {
		class: { 
			primary:	'greenPrimary',
			secondary: 'greenSecondary',
			tertiary: 'greenTertiary',
			title: 'greenTitle'
		}

	};


})
.controller('folderController', function () {
	self = this;
	self.showFolders = false;
	self.showSuccess = null;


		self.messages = {
			fail: {
				alert: '',
				class: 'failClass'
				},
			success: {
				alert: '',
				class: 'successClass'
			}
		};


	self.foldersObj = 
	{

		Folder1:
		{
			name: 'Folder 1',
			files: [
			{fileName: 'item A'},
			{fileName: 'item B'}
			]
		},
		Folder2:
		{
			name: 'Folder 2',
			files: [
			{fileName: 'item C'},
			{fileName: 'item D'},
			{fileName: 'item E'}
			]
		},
		Folder3:
		{
			name: 'Folder 3',
			files: [
			{fileName: 'item F'},
			{fileName: 'item G'},
			{fileName: 'item H'}
			]
		}
		};
	self.addFile = function (folder,file) {
		if(folder){
			if(file){
			folder.files.push({fileName: file});
			self.messages.success.alert = 'The file has been successfully moved';
			self.showSuccess = true;
			self.newFileName = '';
			}else{
			self.messages.fail.alert = 'Please name the file';
			console.log(self.messages.fail.alert);
			self.showSuccess = false;
		}
		}else{
			self.messages.fail.alert = 'Please choose a folder';
			console.log(self.messages.fail.alert);
			self.showSuccess = false;
		}

	};


});
