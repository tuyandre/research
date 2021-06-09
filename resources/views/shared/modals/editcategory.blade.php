<div class="modal" id="editModal" tabindex="-1" role="dialog" aria-labelledby="Project Category">
	<div class="modal-dialog" role="document">
		<div class="modal-content">
			<div class="modal-header d-flex align-items-center">
				<h4 class="modal-title" id="exampleModalLabel1">Edit Category</h4>
				<button type="button" class="close ml-auto" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>
				</button>
			</div>
			<form class="form-horizontal" action="{{ route('projects.updateCategories')}}" id="editForm">{{ csrf_field() }}
				<div class="modal-body">
					<div id="edit-messages"></div>
					<div class="modal-loading" style="width:50px; margin:auto;padding-top:50px; padding-bottom:50px;"> <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
						<span class="sr-only">Loading...</span>
					</div>
					<div class="form-group">
						<label for="recipient-name" class="control-label">Name:</label>
						<input type="text" class="form-control" id="edit-name" placeholder="Category name" name="name" autocomplete="off" required> <span class="text-danger" id="ename" style="color: red"></span>
					</div>
				</div>
				<div class="modal-footer editFooter">
					<input type="hidden" name="id" id="id" />
					<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
					<button type="submit" class="btn btn-primary mr-1" id="editBtn" data-loading-text="Loading..."> <i class="glyphicon glyphicon-ok-sign"></i>
						Save Changes</button>
				</div>
			</form>
		</div>
	</div>
</div>