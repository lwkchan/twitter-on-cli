require_relative 'spec_helper'

RSpec.describe 'Find path for command', :type => :aruba do
  it 'is successful' do
    run('echo "Hello"')
    expect(last_command_started.stdout).to start_with 'Hello'
  end
end
