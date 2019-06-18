// your solution should go here
// for demo purposes use the console for any out you will need.

//	Q1 Recipe

	function FavouriteRecipe()
	{
		this.title = "Potato Salad";
		this.servings = 3;
		this.ingredients = ["Mayonaise", "Potatoes", "Boiled Eggs", "Apples"];
		this.printRecipe = function()
							{
								console.log(this.title+" Serves: "+this.servings+" Ingredients: "+this.ingredients[0]+" "+this.ingredients[1]+" "+this.ingredients[2]+" "+this.ingredients[3]);
							};
	}

	var favRecipe = new FavouriteRecipe();

// Q2 Book tracker

	//Book class
	function Book(title, author, read)
	{
		this.title = title;
		if(read === "yes" || read === "Yes")
		{
			this.read = true;
		}
		else
		{
			this.read = false;
		}

		this.author = author;
		this.areadyRead;
		
		this.printDetails = function()
							{
								
								console.log(this.title+" by "+this.author+".");
								
							}
	}

	//array of books
	var bookList = [];

	//some books
	var book1 = new Book("7 habbits of highly effective people","Brian Tracy", "yes");
	bookList.push(book1);
	var book2 = new Book("Superpower Brain Memory","Some Guy", "no");
	bookList.push(book1);
	var book3 = new Book("Achieving your dreams","Brian Tracy", "yes");
	bookList.push(book1);
	var book4 = new Book("Think and Grow Rich","Napoleon Hill", "no");
	bookList.push(book1);

	//Print books function
	function printBooks()
	{
		for(i = 0; i < bookList.length; i+=1)
		{
			if(bookList[i].read === true)
			{
				console.log("You already read "+bookList[i].title+" by "+bookList[i].author+".");
			}
			else
			{
				console.log("You still need to read "+bookList[i].title+" by "+bookList[i].author+".");
			}
			
		}

	}		
